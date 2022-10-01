import React, { useEffect, useState } from "react";
import Header from "../components/header";
import ProductList from "../components/product-list";

const API_BASE_URL = "http://localhost:4000/api/products";

export default function HomePage() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		loadItems();
	}, []);

	const loadItems = () => {
		fetch(API_BASE_URL)
			.then((resp) => resp.json())
			.then((data) => {
				setItems(data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
			<Header />
			<div className="container">
				<ProductList products={items} />
			</div>
		</>
	);
}
