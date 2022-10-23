import React from "react";

class ErrorBoundary extends React.Component {
	state = {
		hasError: false,
	};

	componentDidCatch(err, info) {
		this.setState({ hasError: true });
	}
	render() {
		if (this.state.hasError) {
			return <p>Error</p>;
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
