import { applyMiddleware, createStore, compose } from "redux";
import { reducers } from "./reducers";
import { tweetsMdl } from "./middleware/tweets";

// dev tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let middlewares = [...tweetsMdl];

if (process.env.NODE_ENV !== "production") {
	let c = require("redux-logger").createLogger;
	const logger = c({
		collapsed: (getState, action, logEntry) => !logEntry.error
	});

	middlewares.push(logger);
}

export const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(...middlewares))
);
