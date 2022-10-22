import { Snackbar as MuiSnackbar } from "@mui/material";
import React from "react";

class Snackbar extends React.Component {
	state = {
		open: false,
		message: "",
	};

	handleToggle = (open, message) => {
		this.setState({ open: open, message: message });
	};
	render() {
		return this.props.render({
			open: this.state.open,
			message: this.state.message,
			handleToggle: this.handleToggle,
		});
	}
}

export const withSnackbar = (Component) => {
	return (props = {}) => (
		<Snackbar
			render={({ open, handleToggle, message }) => {
				return (
					<>
						<Component open={open} handleToggle={handleToggle} {...props} />
						<MuiSnackbar
							open={open}
							autoHideDuration={2000}
							onClose={() => handleToggle(false, "")}
							message={message}
						/>
					</>
				);
			}}
		/>
	);
};
