import {combineReducers} from "redux"
import timer from './timeReducer';
import lapReducer from './lapsReducer'

const rootReducer = combineReducers({
     time:timer,
     laps:lapReducer,
});



export default rootReducer;