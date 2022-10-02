import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import ProductList from "../../components/product-list";
import { appToast } from "../../utils";
import classes from "./style.module.css";

const API_BASE_URL = "http://localhost:4000/api/products";

export default function HomePage() {
	const [items, setItems] = useState([]);
	const [keyword, setKeyword] = useState("");
	const [noResult, setNoResult] = useState(false);

	useEffect(() => {
		loadItems();
	}, [keyword]);

	const loadItems = () => {
		if (keyword.length === 0 || keyword.length >= 3) {
			const uri = `${API_BASE_URL}?keyword=${keyword}`;
			appToast.showToast(true);
			fetch(uri)
				.then((resp) => resp.json())
				.then((data) => {
					setItems(data);
					setNoResult(data.length === 0);
					setTimeout(() => {
						appToast.showToast(false);
					}, 1000);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};

	const onSearch = (event) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const keyword = formData.get("search");
		setKeyword(keyword);
	};

	return (
		<>
			<Header onSubmit={onSearch} value={keyword} onChange={setKeyword} />
			<div className={`container ${classes.appContainer}`}>
				<ProductList products={items} />
				{noResult && (
					<div className={classes.noResult}>
						{`${keyword}... göre bir sonuç bulunamadı!`}
					</div>
				)}
			</div>
		</>
	);
}
