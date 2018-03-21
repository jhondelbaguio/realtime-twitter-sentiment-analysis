import React from "react";
import { Container, Row, Col } from "reactstrap";
import SearchForm from "./SearchForm";
import TweetsList from "./TweetsList";
import TweetCounters from "./TweetCounters";

class DashboardPage extends React.Component {
	render() {
		return (
			<Row className="no-gutters">
				<Col md={7}>
					<div
						className="ccol"
						style={{
							height: "100vh",
							background: "#263448",
							padding: "0px 50px"
						}}
					>
						<div className="siteheading">
							<h4 className="siteheading__title">
								Realtime Tweet Stream + Sentiment Analysis
							</h4>

							<p>
								A simple tool that uses AFINN-165 wordlist to
								perform sentiment analysis on the tweets.
							</p>
							<SearchForm />
						</div>
					</div>
				</Col>
				<Col md={5}>
					<div
						style={{
							height: "100vh",
							overflowY: "scroll",
							padding: "0 20px",
							background: "#1F2B3A"
						}}
					>
						<TweetCounters />

						<TweetsList />
					</div>
				</Col>
			</Row>
		);
	}
}

export default DashboardPage;
