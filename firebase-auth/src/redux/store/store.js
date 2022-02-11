import {createStore, applyMiddleware} from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import rootReducer from "../reducers/rootReducer"

const middleware = [thunk];

if(process.env.NODE_ENV === "development"){
    middleware.push(logger) /// logger is also middleware
}

export const store = createStore(rootReducer,applyMiddleware(...middleware))