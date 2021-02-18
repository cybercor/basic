import React, { Component } from "react";
import { DELETE_ADDCART, UPDATE_ADDCART } from "../../../Redux/Action/Message";

class ItemCart extends Component {
  constructor(props) {
    super(props)
    this.state = {
       quatity:1,
    }
  }
  
  getUpdate=(product,quatity)=>{
    this.setState({
      quatity:quatity
    })
    this.props.onUpdate(product,quatity)
    this.props.onChangeMessage(UPDATE_ADDCART)
  }
  getDelete=()=>{
    var { item } = this.props;
    this.props.onDelete(item.product)
    this.props.onChangeMessage(DELETE_ADDCART)
  }

  onTotal = (price, quatity) => {
    return price * quatity;
  };

  render() {
    var { item } = this.props;
    var {quatity}=this.state >0 ?item.quatity :this.state
    return (
      <tr>
        <td scope="row">
          <h5>{item.product.name}</h5>
          <img
            src={item.product.image}
            alt={item.product.name}
            height="100px"
            width="100px"
          />
        </td>
        <td>{item.product.price}$</td>
        <td>
          <label>{quatity}</label>
          <span className="btn btn-primary" onClick={()=>this.getUpdate(item.product,item.quatity -1)}>
            <i className="fas fa-minus" />
          </span>
          <span className="btn btn-primary" onClick={()=>this.getUpdate(item.product,item.quatity +1)}>
            <i className="fas fa-plus" />
          </span>
        </td>
        <td>
          <label>{this.onTotal(item.product.price, item.quatity)}$</label>
        </td>
        <td>
          <button className="btn btn-danger">
            <i className="fas fa-power-off" onClick={this.getDelete} />
          </button>
        </td>
      </tr>
    );
  }
}

export default ItemCart;
