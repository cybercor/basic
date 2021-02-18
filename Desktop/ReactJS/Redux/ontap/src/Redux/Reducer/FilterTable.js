import { FILTER_TABLE } from "../Action/ActionType";

var initialState = {
  name: "",
  status: -1
};
const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_TABLE:
      return{
          name:action.filter.name,
          status:parseInt(action.filter.status)
      }
    default:
      return state;
  }
};
export default myReducer;
