import { ADD_CART, DELETE_ITEM, UPDATE_ITEM } from "../Action/ActionType";

var data=JSON.parse(localStorage.getItem('CART'))
var initialState = data ? data :[]

var findIndex=(cart,product)=>{ //cart ở đây là mua sp
   var index=-1;
   if(cart.length>0){
       for(var i=0;i<cart.length;i++){
           if(cart[i].product.id===product.id){
               index=i
               break;
           }
       }
   }
   return index
}

const reducer = (state = initialState, action) => {
  var { product, quatity } = action;
  switch (action.type) {
    case ADD_CART:
        var index=findIndex(state,product)
        if(index!==-1){
            state[index].quatity+=quatity;
        }
        else{
            state.push({product,quatity})
        }
        localStorage.setItem('CART',JSON.stringify(state))
      return [...state];

    case DELETE_ITEM:
      var index=findIndex(state,product)
      if(index!==-1){
        state.splice(index,1)
      }
      localStorage.setItem('CART',JSON.stringify(state))
      return [...state]
      
    case UPDATE_ITEM:
      var index=findIndex(state,product)
      if(index!=-1){
        state[index].quatity=quatity
      }
      return [...state]
    default:
      return state;
  }
};
export default reducer;
