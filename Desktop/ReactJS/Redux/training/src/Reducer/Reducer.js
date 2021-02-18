import { LIST_ALL } from "../Action/ActionType";

var initialState = [];
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_ALL:
      return state;
    default:
      return state;
  }
};
export default reducer;
