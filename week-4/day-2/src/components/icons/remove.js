import React from "react";
export function RemoveIcon({ className = "" , ...props}) {
	return (
		<span
			style={{ cursor: "pointer" }}
			className={"material-symbols-outlined " + className}
			{...props}
		>
			cancel
		</span>
	);
}
