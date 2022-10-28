import React from "react";
import ReactDOM from "react-dom/client";
import { PhotosProvider } from "./context";
import App from "./pages";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<PhotosProvider>
		<App />
	</PhotosProvider>
);
