import React from "react";
import { connect } from "react-redux";
import { Form, FormGroup, Input, Button } from "reactstrap";
import { getTweets, stopSearch } from "../redux/actions/tweets";
class SearchForm extends React.Component {
	state = {
		data: {
			keyword: ""
		},
		searching: false,
		errors: []
	};

	submit = e => {
		e.preventDefault();
		const errors = this.validate(this.state.data);
		this.setState({ errors });

		if (Object.keys(errors).length === 0) {
			this.setState({ searching: !this.state.searching });
			this.props.getTweets(this.state.data.keyword);
		}
	};

	onChange = e => {
		this.setState({
			data: { ...this.state.data, [e.target.name]: e.target.value }
		});
	};

	validate = data => {
		const errors = {};
		if (!data.keyword) errors.keyword = "Can't be blank";

		return errors;
	};

	stopSearching = () => {
		this.setState({ searching: !this.state.searching });

		this.props.stopSearch();
	};

	render() {
		const { data, errors } = this.state;
		return (
			<Form onSubmit={this.submit} autoComplete="off">
				<div className="search-bar">
					<FormGroup>
						<input
							type="text"
							name="keyword"
							id="keyword"
							placeholder="Enter Hashtags or Keyword you want to search"
							value={data.keyword}
							onChange={this.onChange}
							autoFocus={true}
						/>
					</FormGroup>
				</div>

				{errors.keyword && <p>{errors.keyword}</p>}

				<FormGroup
					className="text-center"
					style={{ marginTop: "40px" }}
				>
					{!this.state.searching && (
						<Button type="submit" className="searchButton">
							Search
						</Button>
					)}

					{this.state.searching && (
						<h5
							className="loading"
							style={{ margin: "40px 0", color: "#fff" }}
						>
							Searching Tweets
						</h5>
					)}

					{this.state.searching && (
						<Button
							type="button"
							className="searchButton"
							onClick={this.stopSearching}
						>
							Stop Searching
						</Button>
					)}
				</FormGroup>
			</Form>

			/*	<Form onSubmit={this.submit}>
				<FormGroup>
					<Input
						type="text"
						name="keyword"
						id="keyword"
						placeholder="Enter keyword"
						value={data.keyword}
						onChange={this.onChange}
					/>

					{errors.keyword && <p>{errors.keyword}</p>}
				</FormGroup>

				<FormGroup>
					{!this.state.searching && (
						<Button type="submit">Search Tweets</Button>
					)}
					{this.state.searching && (
						<Button type="button" onClick={this.stopSearching}>
							Stop Searching
						</Button>
					)}
				</FormGroup>
			</Form>*/
		);
	}
}

export default connect(null, { getTweets, stopSearch })(SearchForm);
