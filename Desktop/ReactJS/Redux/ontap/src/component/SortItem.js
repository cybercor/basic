import React, { Component } from 'react'
import '../App.css'
import _ from 'lodash';
import {connect} from 'react-redux'
import * as actions from '../Redux/Action/Action'

class SortItem extends Component {
    getDelete=()=>{
        this.props.onCancel(this.props.id);
    }
    getEdit=()=>{
        this.props.onOpenForm();
        this.props.onEdit(this.props.product);
    }
    getUpdateStatus=()=>{
        this.props.onUpdateStatus(this.props.id);
    }
    render() {
        return (
            <tr>
                <td>{this.props.stt + 1}</td>
                <td>{this.props.name}</td>
                <td>
                    <span id="label" className={this.props.status ? 'label label-success' : 'label label-danger'} onClick={this.getUpdateStatus}>{this.props.status ? 'Kích Hoạt' : 'Ẩn'}</span>
                </td>
                <td>
                    <button className="btn btn-warning" onClick={this.getEdit}><i className="fas fa-edit"></i>Sửa</button>
                    <button className="btn btn-danger" onClick={this.getDelete}><i className="fas fa-power-off"></i>Xóa</button>
                </td>
            </tr>

        )
    }
}

const mapStateToProps=(state)=>{
    return{}
}

const mapDispatchToProps=(dispatch,props)=>{
    return{
        onUpdateStatus:(id)=>{
            dispatch(actions.updateStatus(id));
        },
        onCancel:(id)=>{
            dispatch(actions.deleleItem(id))
        },
        onOpenForm:()=>{
            dispatch(actions.openForm())
        },
        onEdit:(product)=>{
            dispatch(actions.editItem(product))
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SortItem)