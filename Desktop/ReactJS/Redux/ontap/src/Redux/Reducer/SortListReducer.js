import { LIST_ALL, UPDATE_STATUS, DELETE, RESET_FORM } from "../Action/ActionType";
import { SAVE_FORM } from "../Action/ActionType";

var initialState =[];

var s4 = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};
var GeneratorID = () => {
  return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4();
};
// var data = JSON.parse(localStorage.getItem('product'));

var findIndex = (product,id) => {
    var result = -1;
    product.forEach((item, index) => {
      if (item.id === id) {
        result = index
      }
    });
    return result
  }

const Reducers = (state = initialState, action) => {
  switch (action.type) {
    case LIST_ALL:
      return state;

    case SAVE_FORM:
      var newProduct = {
        id: action.product.id,
        name: action.product.name,
        status: action.product.status ?true :false
      };
      state.push(newProduct)
      // if(newProduct.id===false){
      //   newProduct.id=GeneratorID()
      //   state.push(newProduct)
      // }
      // else{
      //   index=findIndex(state,newProduct.id)
      //   state[index]=newProduct
      // }
      // localStorage.setItem("product", JSON.stringify(state));
      return [...state]; //copy state cũ and trả ra state new

    // case UPDATE_STATUS:
    //     var id=action.id;
    //     var index=findIndex(state,id);
    //     state[index].status=!state[index].status;
    //     var cloneProduct={...[state]};
    //     cloneProduct.status=!cloneProduct.status
    //     state.splice(index,1);
    //     state.push(cloneProduct);
    //     // localStorage.setItem("product", JSON.stringify(state));
    //   return[...state];

     case DELETE:
       var id=action.id;
       var index=findIndex(state,id)
       state.splice(index,1);
      //  localStorage.setItem("product", JSON.stringify(state));
       return[...state];
       case RESET_FORM:
      return state;
    default:
      return state;
  }
};
export default Reducers;
