import React from "react";

export function CloseIcon(props) {
	return (
		<button
			type="button"
			className="btn-close"
			aria-label="Close"
			{...props}
		></button>
	);
}
