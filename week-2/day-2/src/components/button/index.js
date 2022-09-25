import React from "react";

export default function Button(props) {
	const onClick = () => {
		console.log("tıklandı");
	};
	return <button onClick={props.onClick || onClick}>{props.children}</button>;
}
