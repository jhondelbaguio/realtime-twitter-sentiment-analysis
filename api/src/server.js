const Hapi = require("hapi");
const config = require("config");
const logger = require("./utils/logger");
const routes = require("./routes");
const plugins = require("./plugins");
const subscriptions = require("./modules/subscription");

const server = new Hapi.Server();

server.connection({
	port: config.get("app.port"),
	routes: {
		cors: true
	}
});

// register plugins
const registerPlugins = async () => {
	try {
		await server.register(plugins);

		// Serve Routes for API
		server.route(routes(server));

		subscriptions(server);
	} catch (error) {
		logger.error(error, "Failed to register hapi plugins");
		throw error;
	}
};

registerPlugins();

// export modules
module.exports = server;
