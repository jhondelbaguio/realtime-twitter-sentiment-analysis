/* @flow */

const Inert = require("inert");
const Vision = require("vision");
const HapiSwagger = require("hapi-swagger");
const config = require("config");
const Package = require("../package.json");
const Nes = require("nes");

const DEVELOPMENT = "development";

let plugins = [Inert, Vision, Nes];

if (config.util.getEnv("NODE_ENV") === DEVELOPMENT) {
	plugins.push({
		register: HapiSwagger,
		options: {
			info: {
				title: "API Documentation",
				version: Package.version
			},
			pathPrefixSize: 3
		}
	});
}

module.exports = plugins;
