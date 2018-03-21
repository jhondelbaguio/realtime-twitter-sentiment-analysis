// @flow
import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from "../reducers/index";
const configureStore = () => {
	const store = createStore(
		rootReducer,
		compose(
			applyMiddleware(
				createLogger({
					collapsed: (getState, action, logEntry) => !logEntry.error
				})
			)
		)
	);
	return store;
};

export default configureStore;
