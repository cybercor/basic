import React, { Component } from "react";
import MessageContainer from "../../Redux/Container/MessageContainer";

class Product extends Component {
  render() {
    return (
      <section>
        <div className="container-product">
          <div className="row">
            <div className="col-lg-12">
              <h2>DANH SÁCH SẢN PHẨM</h2>
            </div>
            {this.props.children}
            <div className="col-lg-12">
             <MessageContainer/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Product;
