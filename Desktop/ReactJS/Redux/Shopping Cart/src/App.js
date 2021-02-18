import React, { Component } from "react";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import ProductContainer from "./Redux/Container/ProductContainer";
import CartContainer from "./Redux/Container/CartContainer";

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ProductContainer/>
        <CartContainer/>
        <Footer />
      </div>
    );
  }
}

export default App;
