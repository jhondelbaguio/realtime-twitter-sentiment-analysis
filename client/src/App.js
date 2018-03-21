// @flow
import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import DashboardPage from "./components/DashboardPage";
import { stopSearch } from "./redux/actions/tweets";

class App extends React.Component {
	componentDidMount() {
		// Stops Streaming of tweets when page is closed / refreshed
		window.addEventListener("beforeunload", this.props.stopSearch);
	}

	componentWillUnmount() {
		// Stops Streaming of tweets when page is closed / refreshed
		window.removeEventListener("beforeunload", this.props.stopSearch);
	}

	render() {
		const { location } = this.props;

		return (
			<div>
				<Switch>
					<Route
						location={location}
						path="/"
						exact
						component={DashboardPage}
					/>
				</Switch>
			</div>
		);
	}
}

export default connect(null, { stopSearch })(App);
