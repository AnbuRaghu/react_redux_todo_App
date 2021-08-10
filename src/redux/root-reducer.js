import {combineReducers} from 'redux'
import todosreducer from './reducer'

const rootReducer=combineReducers({
    todos:todosreducer
})
export default rootReducer;

