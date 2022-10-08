import React, { useEffect, useState } from "react";
import "./style.css";

export default function ToastLoading({ message = "Yükleniyor..." }) {
	const [show, setShow] = useState(false);

	const subscriber = (e) => {
		setShow(e.detail);
	};
	useEffect(() => {
		document.addEventListener("FETCHING", subscriber);
		return () => {
			document.removeEventListener("FETCHING", subscriber);
		};
	}, []);
	if (!show) return null;

	return (
		<div className="toast fade show app-toast" role="alert">
			<div className="toast-body">{message}</div>
		</div>
	);
}
