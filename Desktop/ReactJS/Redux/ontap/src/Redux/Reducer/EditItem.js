import { EDIT_ITEM } from "../Action/ActionType";

var initialState = {};
const Reducers = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_ITEM:
      return action.product;
    default:
      return state;
  }
};
export default Reducers;
