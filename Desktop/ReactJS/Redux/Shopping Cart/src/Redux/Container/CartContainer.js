import React, { Component } from 'react'
import { connect } from 'react-redux'
import Cart from './../../component/Section/Cart'
import * as actions from './../Action/Action'
import {ADDCART_EMPTY} from './../Action/Message'
import ItemCart from './../../component/Section/Item/ItemCart'

class CartContainer extends Component {
    onShowCart=(cart)=>{
        var{onDelete,onChangeMessage,onUpdate}=this.props;
        var result=ADDCART_EMPTY;
        if(cart.length>0){
            result=cart.map((item,index)=>{
                return(
                    <ItemCart
                        key={index}
                        item={item}
                        onDelete={onDelete}
                        onChangeMessage={onChangeMessage}
                        onUpdate={onUpdate}
                    />
                )
            });
        }
        return result
    }
    render() {
        var {cart}=this.props;
        return (
           <Cart>
               {this.onShowCart(cart)}
           </Cart>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        cart:state.CartReducer
    }
}
const mapDispatchToProps=(dispatch,props)=>{
    return{
        onDelete:(product)=>{
            dispatch(actions.deleteItem(product))
        },
        onChangeMessage:(message)=>{
            dispatch(actions.changeMessage(message))
        },
        onUpdate:(product,quatity)=>{
            dispatch(actions.updateItem(product,quatity))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartContainer)
