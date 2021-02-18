import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../Redux/Action/Action'

class Taskform extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            name: '',
            status: false,
        }
    }
    onName = (event) => {
        this.setState({
            name: event.target.value
        });
    }
    onStatus = (event) => {
        this.setState({
            status: event.target.value
        });
        if (this.state.status === true) {
            this.setState({
                status: false
            });
        }
        else if (this.state.status === false) {
            this.setState({
                status: true
            });
        }
    }
    onReset = () => {
        this.setState({
            id:'',
            name: '',
            status: false
        });
    }
    onCancelForm = () => {
        this.props.onButtonClose();
        this.setState({
            name: '',
            status: false
        });
    }
    getSave = (event) => {
        event.preventDefault();
        this.props.saveForm(this.state);
        this.props.onCloseForm();
    }
    componentWillMount() {
        if (this.props.edit) {
            this.setState({
                id: this.props.edit.id,
                name: this.props.edit.name,
                status: this.props.edit.status,
            });
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.edit) {
            this.setState({
                id: nextProps.edit.id,
                name: nextProps.edit.name,
                status: nextProps.edit.status,
            });
        }
    }
    onButtonClose=()=>{
        this.props.onCloseForm();
    }
    render() {
        var { display } = this.props;
        return (
            <form onSubmit={this.getSave}>
                <div className="panel panel-danger">
                    <div className="panel-heading">
                        <button type="button" className="close" onClick={this.onButtonClose}>&times;</button>
                        <h3 className="panel-title">{!this.state.id ? 'Thêm Công Việc' : 'Cập Nhật Công Việc' }</h3>
                    </div>
                    <div className="panel-body">
                        <label>Tên:</label>
                        <br />
                        <div className="form-group">
                            <input type="text" name="name" className="form-control" value={this.state.name} onChange={this.onName} />
                            <br />
                            <label>Trạng thái:</label>
                            <select name="status" className="form-control" value={this.state.status} onChange={this.onStatus}>
                                <option value={true}>KíchHoạt</option>
                                <option value={false}>Ẩn</option>
                            </select>
                            <button className="btn btn-warning"><i className="fas fa-save"></i>Lưu lại</button>
                            <button className="btn btn-info" type="reset" onClick={this.onReset}><i className="fas fa-spinner" ></i>Reset</button>
                            <button className="btn btn-danger" onClick={this.onCancelForm}><i className="fas fa-window-close"></i>Hủy bỏ</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        display:state.DisplayForm,
        edit:state.EditItem,
    }
};

const mapDispatchToProps = (dispatch, props) => { //Thay thế cho save
    return {
        saveForm: (product) => {
            dispatch(actions.saveForm(product))
        },
        onCloseForm: () => {
            dispatch(actions.closeForm());
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Taskform)
