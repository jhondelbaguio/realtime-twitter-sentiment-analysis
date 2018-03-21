import React from "react";
import { Col, Row } from "reactstrap";
import { connect } from "react-redux";
class TweetCounters extends React.Component {
	render() {
		return (
			<Row className="text-center">
				<Col md={3}>
					<div className="stats">
						<p className="stats__count"> {this.props.tweetCount}</p>
						<p className="stats__desc">
							<span className="ion-social-twitter" />Count
						</p>
					</div>
				</Col>
				<Col md={3}>
					<div className="stats">
						<p className="stats__count">
							{this.props.positiveTweetCount}
						</p>
						<p className="stats__desc">
							<span className="ion-thumbsup" />Positive
						</p>
					</div>
				</Col>
				<Col md={3}>
					<div className="stats">
						<p className="stats__count">
							{" "}
							{this.props.negativeTweetCount}
						</p>
						<p className="stats__desc">
							<span className="ion-thumbsdown" />Negative
						</p>
					</div>
				</Col>
				<Col md={3}>
					<div className="stats">
						<p className="stats__count">
							{this.props.neutralTweetCount}
						</p>
						<p className="stats__desc">
							<span className="ion-android-contact" />Neutral
						</p>
					</div>
				</Col>
			</Row>
		);
	}
}

function mapStateToProps(state) {
	console.log(state);
	return {
		tweetCount: state.tweets.items.length,
		positiveTweetCount: state.tweets.positive,
		negativeTweetCount: state.tweets.negative,
		neutralTweetCount: state.tweets.neutral
	};
}
export default connect(mapStateToProps, {})(TweetCounters);
