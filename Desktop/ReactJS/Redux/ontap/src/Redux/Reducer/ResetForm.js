import { RESET_FORM } from "../Action/ActionType";

var initialState = {
        id: "",
        name: "",
        status: false  
};
const Reducers = (state = initialState, action) => {
  switch (action.type) {
    case RESET_FORM:
      return state;
    default:
      return state;
  }
};
export default Reducers;
