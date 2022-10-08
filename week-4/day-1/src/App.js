import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToastLoading from "./components/toast-loading";
import HomePage from "./pages/home";
import CartPage from "./pages/cart";
import NotFound from "./pages/not-found";

export default function App() {
	return (
		<React.Fragment>
			<BrowserRouter>
				<Routes>
					<Route element={<HomePage />} path="/" />
					<Route element={<CartPage />} path="/sepet" />
					<Route element={<NotFound />} path="*" />
				</Routes>
			</BrowserRouter>

			<ToastLoading />
		</React.Fragment>
	);
}
