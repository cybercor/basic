import React, { Component } from 'react'
import '../App.css';
import _ from "lodash";
import * as actions from "./../Redux/Action/Action";
import { connect } from 'react-redux';

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
             keyword:'',
        }
    }
    onKeyWord=(event)=>{
        this.setState({
            keyword:event.target.value
        });
    }
    getOpenCloseForm=()=>{
        this.props.onOpenCloseForm();
        this.props.onResetForm({id:'',name:'',status:false});
    }
    getKeyWord=()=>{
        this.props.onKeyWord(this.state.keyword)
    }
    render() {
        
        return (
            <div className="space">
                <button id="work" className="btn btn-primary" onClick={this.getOpenCloseForm}><i className="fas fa-plus-square"></i>Thêm Công Việc</button>
                <button id="work" className="btn btn-info" onClick={this.props.onJokerData}><i className="fas fa-database"></i>Joker Data</button>
                <div className="fix">
                    <input type="text" name="keyword" id="search" className="form-control" required="required" placeholder="Mời bạn nhập từ khóa" value={this.state.keyword} onChange={this.onKeyWord}/>
                    <button id="load" className="btn btn-primary" onClick={this.getKeyWord}><i className="fas fa-search"></i>Tìm</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        reset:state.ResetForm,
    }
}
const mapDispatchToProps=(dispatch,props)=>{
    return{
      onKeyWord:(keyword)=>{
        dispatch(actions.searchForm(keyword))
      }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Search)
