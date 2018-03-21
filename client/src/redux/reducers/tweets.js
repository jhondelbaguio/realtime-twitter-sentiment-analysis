import { ADD_TWEET, SEARCH_TWEETS, GET_TWEETS } from "../actions/tweets";
const InitialState = {
	items: [],
	positive: 0,
	neutral: 0,
	negative: 0
};

export function tweetsReducer(state = InitialState, action) {
	switch (action.type) {
		case GET_TWEETS:
			return InitialState;
		case ADD_TWEET:
			let positive = state.positive;
			let negative = state.negative;
			let neutral = state.neutral;

			if (action.payload.sentimentScore > 0) {
				positive++;
			} else if (action.payload.sentimentScore < 0) {
				negative++;
			} else {
				neutral++;
			}

			return {
				...state,
				items: [action.payload, ...state.items],
				positive,
				neutral,
				negative
			};
		default:
			return state;
	}
}
