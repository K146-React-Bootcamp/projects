import React from "react";

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

export class Api extends React.Component {
	state = {
		data: [],
		loading: true,
		error: null
	};
	componentDidMount() {
		fetch(`${API_BASE_URL}${this.props.path}`)
			.then((res) => {
				if (res.status === 404) {
					this.setState({ error: "Not Found", loading: false})
				}
				return res.json()
			})
			.then((data) => {
				setTimeout(() => {
					this.setState({ data: data, loading: false });
				}, 2000);
			}).catch(e => {
				debugger
				this.setState({ data: [], error: e.message, loading: false})
			});
	}
	render() {
		if (this.state.loading) {
			return this.props.loadingText || "yükleniyor...";
		}
		if (this.state.error) {
			return <p>{this.state.error}</p>
		}
		return this.props.render(this.state);
	}
}
