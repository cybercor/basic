import { SORT_FORM } from "../Action/ActionType";

var initialState = {
  by: "name",
  value: 1
};
const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case SORT_FORM:
      return {
          by:action.sort.by,
          value:action.sort.value
      };
    default:
      return state;
  }
};
export default myReducer;
