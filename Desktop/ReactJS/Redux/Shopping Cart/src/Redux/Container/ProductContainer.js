import React, { Component } from 'react'
import { connect } from 'react-redux'
import Product from '../../component/Section/Product';
import * as actions from './../Action/Action'
import ItemProduct from './../../component/Section/Item/ItemProduct'

class ProductContainer extends Component {
    onShowProduct=(product)=>{
        var result=null;
        var {onButtonPay,onChangeMessage}=this.props;
        if(product.length>0){
           result=product.map((item,index)=>{
            return(
                <ItemProduct
                    key={index}
                    item={item}
                    onButtonPay={onButtonPay}
                    onChangeMessage={onChangeMessage}
                    product={item}
                />
            )
           });
        }
        return result
    }
    render() {
        var {product}=this.props;
        return (
            <Product>
                {this.onShowProduct(product)}
            </Product>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        product:state.ProductReducer
    }
}
const mapDispatchToProps=(dispatch,props)=>{
    return{
        onButtonPay:(product)=>{
          dispatch(actions.addCart(product,1))
        },
        onChangeMessage:(message)=>{
            dispatch(actions.changeMessage(message))
        }
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(ProductContainer)
