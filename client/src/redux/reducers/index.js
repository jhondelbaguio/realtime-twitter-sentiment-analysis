// @flow
import { combineReducers } from "redux";
import { tweetsReducer } from "./tweets";
const reducersData = {
	tweets: tweetsReducer
};

export const reducers = combineReducers(reducersData);
