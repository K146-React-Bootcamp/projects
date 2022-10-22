import React from "react";

export default class ErrorBoundary extends React.Component {
	state = {
		hasError: false,
	};

	componentDidCatch(err, info) {
		console.log({ err, info });
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) {
			return <p>Beklenmeyen bir hata oluştu!</p>;
		}
		return this.props.children;
	}
}
