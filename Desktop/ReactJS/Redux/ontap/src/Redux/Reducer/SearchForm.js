import { SEARCH_FORM } from "../Action/ActionType";


var initialState='';
const myReducer = (state = initialState, action) => {
    switch (action.type) {
      case SEARCH_FORM:
        return action.keyword;
      default:
        return state;
    }
  };
export default myReducer;