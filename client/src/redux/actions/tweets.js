export const GET_TWEETS = "[tweets] GET";
export const FETCH_TWEETS_SUCCESS = "[tweets] Fetch success";
export const FETCH_TWEETS_ERROR = "[tweets] Fetch Error";

export const STOP_SEARCH = "[tweets] STOP";
export const STOP_SEARCH_SUCCESS = "[tweets] Stop Success";

export const ADD_TWEET = "[tweets] Adding tweet";
export const SEARCH_TWEETS = "[tweets] Searching Tweets";

export const getTweets = keyword => ({
	type: GET_TWEETS,
	payload: keyword
});

export const stopSearch = () => ({
	type: STOP_SEARCH
});

export const addTweet = data => ({
	type: ADD_TWEET,
	payload: data
});

export const searchNewTweets = () => ({
	type: SEARCH_TWEETS
});
