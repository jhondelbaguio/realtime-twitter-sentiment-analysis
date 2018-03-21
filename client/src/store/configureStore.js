// @flow
import prod from "./configureStore.prod";
import dev from "./configureStore.dev";

let env = null;

if (process.env.NODE_ENV === "production") {
	env = prod;
} else {
	env = dev;
}

export default env;
