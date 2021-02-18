import { WELCOM_SHOP } from "./../Action/Message";
import { CHANGE_MESSAGE } from "../Action/ActionType";

var initalState = WELCOM_SHOP;

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case CHANGE_MESSAGE:
    return action.message
      default :return state;
  }
};
export default reducer;
