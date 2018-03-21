import React from "react";
import { connect } from "react-redux";
import Tweet from "./Tweet";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Fade = ({ children, ...props }) => (
	<CSSTransition {...props} timeout={1000} classNames="fade">
		{children}
	</CSSTransition>
);

class TweetsList extends React.Component {
	render() {
		return (
			<div>
				<TransitionGroup className="todo-list">
					{this.props.tweets.map((tweet, i) => (
						<Fade key={i}>
							<Tweet tweet={tweet} />
						</Fade>
					))}
				</TransitionGroup>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		tweets: state.tweets.items
	};
}

export default connect(mapStateToProps, {})(TweetsList);
