const _ = require("lodash");

function spacecamel(s) {
	return s.replace(/([a-z])([A-Z])/g, "$1 $2");
}

const failAction = errors => {
	const result = {};
	_.forEach(errors.data.details, (val, key) => {
		result[val.context.key] = spacecamel(val.message.replace(/['"]+/g, ""));
	});

	return result;
};

module.exports = failAction;
