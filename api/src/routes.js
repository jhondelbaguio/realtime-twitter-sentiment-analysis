//const { TweetController } = require("./controllers");
const { getSentiment } = require("./sentiment");
let stream;

function start(params) {
	if (stream) stream.stop();
	const Twit = require("twit");
	const T = new Twit({
		consumer_key: "ZhXtaRAlNLjzCp4bLlz7VIh47",
		consumer_secret: "I22j2nFtznVJ3XwHC2cXfva2iyaS5d5lOSI0EBewVNkJhwqFrX",
		access_token: "4859048381-K9L6aDChhJ5tOQev7eocDjR6DK32xHN1J26JBoi",
		access_token_secret: "J9qerQyc3L6ldNFc6lxGQTfWc7LkIYZxtTEsC5MCiLo2s",
		timeout_ms: 60 * 1000 // optional HTTP request timeout to apply to all requests.
	});

	stream = T.stream("statuses/filter", params);
	disableReconnectWhenStopped(stream);
}

function disableReconnectWhenStopped(_stream) {
	console.log("reconnecting");
	_stream.on("reconnect", () => {
		if (!stream) _stream.stop();
	});
}

function stop() {
	if (stream) {
		stream.stop();
		stream = null;
	}
}

const routes = server => [
	{
		method: "GET",
		path: "/api/v1/ping/{id}",
		handler: (request, reply) => {
			start({ track: request.params.id });

			stream.on("tweet", function(tweet) {
				let modifiedTweet = getSentiment(tweet);
				server.publish(
					`/api/v1/ping/${request.params.id}`,
					modifiedTweet
				);
			});
			reply();
		},
		config: {
			tags: ["api", "v1", "vote", "socket"]
		}
	},
	{
		method: "GET",
		path: "/api/v1/pong",
		handler: (request, reply) => {
			console.log("stop streaming");
			stop();
		},
		config: {
			tags: ["api", "v1", "vote", "socket"]
		}
	}
];

module.exports = routes;
