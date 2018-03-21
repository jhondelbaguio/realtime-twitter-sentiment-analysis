import React from "react";
import { Container, Row, Col } from "reactstrap";
import Sentiment from "./Sentiment";

const Tweet = ({ tweet }) => (
	<div className="tweet">
		<Row>
			<Col lg={1}>
				<div className="text-center">
					<img
						src={tweet.user.profile_image_url}
						alt=""
						className="tweet__avatar"
					/>
				</div>
			</Col>
			<Col lg={11}>
				<div className="tweet__body">
					<Sentiment score={tweet.sentimentScore} />
					<div className="tweet__name">
						<a>{tweet.user.name}</a>{" "}
						<span className="screen_name">
							@{tweet.user.screen_name}
						</span>
					</div>

					<div className="tweet__content">{tweet.text}</div>
				</div>
			</Col>
		</Row>
	</div>
);

export default Tweet;
