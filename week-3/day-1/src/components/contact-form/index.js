import React, { useState } from "react";
import Button from "../button";
import "./style.css";

const ContactForm = (props) => {
	const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

	const submit = (event) => {
		event.preventDefault();

		console.log({
      email,
      message
		});
	};

	return (
		<form onSubmit={submit} className="contact-form">
			<div className="form-row">
				<input
					value={email}
					onChange={(event) => setEmail(event.target.value)}
				/>
			</div>
			<div className="form-row">
				<textarea
					rows={6}
					value={message}
					onChange={(event) => setMessage(event.target.value)}
				/>
			</div>
			<div>
				<Button>Gönder</Button>
			</div>
		</form>
	);
};
export default ContactForm;
