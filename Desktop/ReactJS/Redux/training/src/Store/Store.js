import {createStore} from 'redux'
import reducer from '../Reducer/Reducer'

const store=createStore(reducer);

function saveLocalStorage(state){
    try{
        const load=JSON.stringify(state)
        localStorage.setItem('state',load)
    }
    catch(e){
        console.log(e)
    }
}

store.subscribe(()=> saveLocalStorage(store.getState()))
export default store