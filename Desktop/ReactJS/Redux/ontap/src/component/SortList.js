import React, { Component, Fragment } from "react";
import SortItem from "./SortItem";
import "../App.css";
import _ from "lodash";
import { connect } from "react-redux";
import * as actions from "./../Redux/Action/Action";

class SortList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtername: "",
      filterstatus: -1
    };
  }
  onChange = event => {
    var target = event.target;
    var name = target.name;
    var value = target.value;

    var filter = {
      name: name === "filtername" ? value : this.state.filtername,
      status: name === "filterstatus" ? value : this.state.filterstatus
    };
    this.props.onFilter(filter);
    this.setState({
      [name]: value
    });
  };
  getSort = (sortby, sortvalue) => { //create 2 sort as SortList.js
    this.props.onSort({
      by:sortby,
      value:sortvalue
    });
  };
  render() {
    var { filter, product, keyword,sort } = this.props;
    if (filter.name) {
      product = _.filter(product, item => {
        return (
          item.name.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1
        );
      });
    }
    product = _.filter(product, item => {
      if (filter.status == -1) {
        return product;
      } else {
        return item.status === (filter.status === 1 ? true : false);
      }
    });
  product=_.filter(product,(item)=>{
    if(keyword){
      return item.name.toLowerCase().indexOf(keyword.toLowerCase()) !==-1
    }
    else{
      return product
    }
  });
  if(sort.by=='name'){
    product.sort((a,b)=>{
      if(a.name>b.name){
        return sort.value
      }
      else if(a.name<b.name){
        return -sort.value
      }
    });
  }
  else{
    product.sort((a,b)=>{
      if(a.status>b.status){
        return -sort.value
      }
      else{
        return sort.value
      }
    })
  }
    let element = product.map((item, index) => {
      return (
        <SortItem
          key={index}
          id={item.id}
          stt={index}
          name={item.name}
          status={item.status}
          onOpenForm={this.props.onOpenForm}
          product={item}
        />
      );
    });
    return (
      <Fragment>
        <div className="dropdown">
          <button
            type="button"
            className="btn btn-primary dropdown-toggle"
            data-toggle="dropdown"
            id="loadone"
          >
            <i className="fas fa-book"></i>
            Sắp Xếp
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdown">
            <a
              className="dropdown-item"
              href="#"
              onClick={() => this.getSort("name", 1)}
            >
              Từ A-Z<i className="fas fa-check"></i>
            </a>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => this.getSort("name", -1)}
            >
              Từ Z-A
            </a>
            <hr />
            <a
              className="dropdown-item"
              href="#"
              onClick={() => this.getSort("status", 1)}
            >
              Kích Hoạt
            </a>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => this.getSort("status", -1)}
            >
              Ẩn
            </a>
          </div>
        </div>
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>STT</th>
              <th>TÊN</th>
              <th>TRẠNG THÁI</th>
              <th>HÀNH ĐỘNG</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>
                <input
                  type="search"
                  name="filtername"
                  id="input"
                  className="form-control"
                  value={this.state.filtername}
                  onChange={this.onChange}
                />
              </td>
              <td>
                <select
                  className="form-control"
                  name="filterstatus"
                  value={this.state.filterstatus}
                  onChange={this.onChange}
                >
                  <option value={-1}>Tất cả</option>
                  <option value={1}>Kích Hoạt</option>
                  <option value={0}>Ẩn</option>
                </select>
              </td>
              <td></td>
            </tr>
            {element}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    product: state.SortListReducer,
    filter: state.FilterTable,
    keyword: state.SearchForm,
    sort:state.SortForm,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onFilter: filter => {
      dispatch(actions.filterTable(filter));
    },
    onSort:(sort)=>{
      dispatch(actions.sortForm(sort))
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SortList);
