// @flow
import axios from "axios";

if (!process.env.REACT_APP_API_PATH_PROD)
	throw new Error("API Path for Production Missing");
if (!process.env.REACT_APP_API_PATH_DEV)
	throw new Error("API Path for Development Missing");

let API_PATH = process.env.REACT_APP_API_PATH_PROD || "";

if (process.env.NODE_ENV === "development") {
	API_PATH = process.env.REACT_APP_API_PATH_DEV || "localhost:7070";
}

export default {};
