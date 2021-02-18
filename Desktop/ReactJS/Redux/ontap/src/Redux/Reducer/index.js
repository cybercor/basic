import {combineReducers} from 'redux'
import SortListReducer from './SortListReducer'
import DisplayForm from './DisplayForm'
import EditItem from './EditItem'
import ResetForm from './ResetForm'
import FilterTable from './FilterTable'
import SearchForm from './SearchForm'
import SortForm from './SortForm'

const reducer=combineReducers({
    SortListReducer:SortListReducer,
    DisplayForm:DisplayForm,
    EditItem:EditItem,
    ResetForm:ResetForm,
    FilterTable:FilterTable,
    SearchForm:SearchForm,
    SortForm:SortForm
})
export default reducer