const _ = require("lodash");

const parseErrors = errors => {
	const result = {};
	_.forEach(errors, (val, key) => {
		result[key] = val.message;
	});
	return result;
};

module.exports = parseErrors;
