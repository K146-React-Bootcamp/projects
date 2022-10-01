import React from "react";

export default function Button({ className = "btn btn-default", ...props }) {
	return (
		<button onClick={props.onClick} className={className}>
			{props.children}
		</button>
	);
}
