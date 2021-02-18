import React, { Component } from "react";
import {ADDCART_SUCCESS} from '../../../Redux/Action/Message'

class ItemProduct extends Component {
  getButtonPay = () => {
    this.props.onButtonPay(this.props.product);
    this.props.onChangeMessage(ADDCART_SUCCESS)
  };
  render() {
    var { item } = this.props;
    return (
      <div className="col-lg-4">
        <div className="card custom-cards">
          <div className="card-header ">
            <img
              src={item.image}
              alt={item.name}
              height="300px"
              width="300px"
            />
          </div>
          <div className="card-body">
            <h4>{item.name}</h4>
            <p>{item.status}</p>
          </div>
          <div className="card-footer">
            <span>{item.price}$</span>
            <button
              className="btn btn-primary shopping-cart"
              onClick={this.getButtonPay}
            >
              <i className="fas fa-shopping-cart" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemProduct;
