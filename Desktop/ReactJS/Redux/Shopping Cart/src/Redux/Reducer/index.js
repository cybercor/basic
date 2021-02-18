import {combineReducers} from 'redux'
import ProductReducer from './ProductReducer'
import CartReducer from './CartReducer'
import MessageReducer from './MessageReducer'

const rootReducer=combineReducers({
    ProductReducer:ProductReducer,
    CartReducer:CartReducer,
    MessageReducer:MessageReducer
});
export default rootReducer