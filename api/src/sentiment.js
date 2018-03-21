const nodeSentiment = require("sentiment");

const getSentiment = tweet => {
	let sentiment = nodeSentiment(tweet.text);

	let modifiedTweet = {
		sentimentScore: sentiment.score,
		user: {
			name: tweet.user.name,
			screen_name: tweet.user.screen_name,
			profile_image_url: tweet.user.profile_image_url
		},
		text: tweet.text
	};

	return modifiedTweet;
};

module.exports = {
	getSentiment
};
