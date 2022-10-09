import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToastLoading from "./components/toast-loading";
import HomePage from "./pages/home";
import CartPage from "./pages/cart";
import NotFound from "./pages/not-found";
import SurveyAnswerPage from "./pages/survey-answer";
import CategoryListPage from "./pages/category-list";
import ProductDetailPage from "./pages/product-detail";

export default function App() {
	return (
		<React.Fragment>
			<BrowserRouter>
				<Routes>
					<Route element={<HomePage />} path="/" />
					<Route element={<CartPage />} path="/sepet" />
					<Route element={<SurveyAnswerPage />} path="/anket" />
					<Route element={<CategoryListPage />} path="/kategoriler/:id" />
					<Route element={<ProductDetailPage />} path="/urunler/:id" />
					<Route element={<NotFound />} path="*" />
				</Routes>
			</BrowserRouter>

			<ToastLoading />
		</React.Fragment>
	);
}
