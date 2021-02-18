import { DIS_PLAY, OPEN_FORM, CLOSE_FORM } from '../Action/ActionType'

var initialState = false

var Reducers = (state = initialState, action) => {
    switch (action.type) {
        case DIS_PLAY:
            return !state;
        case OPEN_FORM:
            return true;
        case CLOSE_FORM:
            return false;
        default: return state;
    }
};

export default Reducers