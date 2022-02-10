import {combineReducers} from "redux"
import timer from './timereducer';
import lapReducer from './lapsReducer'

const rootReducer = combineReducers({
     time:timer,
     laps:lapReducer,
});