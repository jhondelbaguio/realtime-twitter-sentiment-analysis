import {
	GET_TWEETS,
	STOP_SEARCH,
	addTweet,
	searchNewTweets
} from "../actions/tweets";
import Nes from "nes";
const client = new Nes.Client("ws://localhost:7070");
client.connect();

const searchTweets = async (dispatch, keyword) => {
	const payload = await client.request(`/api/v1/ping/${keyword}`);

	const handler = (update, flags) => {
		dispatch(addTweet(update));
	};

	client.subscribe(`/api/v1/ping/${keyword}`, handler);
};

const disconnect = async () => {
	const z = await client.request("/api/v1/pong");
	if (z) {
		client.disconnect();
	}
};

const stopSearch = ({ dispatch }) => next => action => {
	next(action);

	if (action.type === STOP_SEARCH) {
		disconnect();
	}
};

export const getTweetsFlow = ({ dispatch }) => next => action => {
	next(action);

	if (action.type === GET_TWEETS) {
		dispatch(searchNewTweets());

		searchTweets(dispatch, action.payload);
	}
};

export const tweetsMdl = [getTweetsFlow, stopSearch];
