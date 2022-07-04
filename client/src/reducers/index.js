import { combineReducers } from "redux";

import posts from './posts';
//reducers are functions that accepts a state and an action
//we perform a logic base on the state and action
export default combineReducers({posts });