import React, { useEffect, useRef, useState } from "react";
import "./style.css";

const defaultClass = "top-right";
const classNames = ["toast", "fade show app-toast", defaultClass];

const _message = "Yükleniyor...";
export default function ToastLoading() {
	// const [show, setShow] = useState(false);
	// const [message, setMessage] = useState(_message);

	const [state, setState] = useState({
		show: false,
		message: _message
	})
	const ref = useRef();

	const setPosition = (position) => {
		ref.current.setAttribute("class", classNames.join(" "));
		ref.current.classList.add(position || defaultClass);
	};

	const subscriber = (e) => {
		if (typeof e.detail === "object") {
			const { show, position, message } = e.detail;
			// setShow(show);
			// setMessage(message || _message);
			setState({
				show: show,
				message: message || _message
			})
			setPosition(position);
		} else {
			// setShow(e.detail);
			// setMessage(_message);
			setState({
				show: e.detail,
				message: _message
			})
			setPosition(defaultClass);
		}
	};
	
	useEffect(() => {
		document.addEventListener("FETCHING", subscriber);
		return () => {
			document.removeEventListener("FETCHING", subscriber);
		};
	}, []);

	return (
		<div
			style={{
				visibility: state.show ? "visible" : "hidden",
			}}
			ref={ref}
			className={classNames.join(" ")}
			role="alert"
		>
			<div className="toast-header">
				<strong className="">{state.message}</strong>
			</div>
			<div className="toast-body">
				<div className="spinner-border" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			</div>
		</div>
	);
}
