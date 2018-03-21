import React from "react";

const Sentiment = ({ score }) => {
	if (score > 0) {
		return (
			<span
				className="ion-arrow-up-a"
				style={{ float: "right", fontSize: "20px", color: "#008DD5 " }}
			/>
		);
	} else if (score < 0) {
		return (
			<span
				className="ion-arrow-down-a"
				style={{ float: "right", fontSize: "20px", color: "#FF6663" }}
			/>
		);
	} else {
		return (
			<span
				className="ion-minus-round"
				style={{ float: "right", fontSize: "20px", color: "#F5CB5C" }}
			/>
		);
	}
};

export default Sentiment;
