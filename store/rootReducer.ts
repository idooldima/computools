import { combineReducers } from "redux";
import * as reducers from "./reducers";

const appReducer = combineReducers(reducers);

const rootReducer = (state: any, action: any) => appReducer(state, action);

export default rootReducer;
