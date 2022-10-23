import React from "react";
import ReactDOM from "react-dom/client";
import { Favorite } from "./context";
import App from "./pages";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Favorite.Provider>
		<App />
	</Favorite.Provider>
);
