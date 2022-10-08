import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import Header from "../../components/header";
import NoResult from "../../components/no-result";

export default function NotFound() {
	const navigate = useNavigate();
	return (
		<>
			<Header />
			<NoResult show message="404 Sayfa Bulunamadı">
				<Button onClick={() => navigate("/")}>Ana Sayfa</Button>
			</NoResult>
		</>
	);
}
