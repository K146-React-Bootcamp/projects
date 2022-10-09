import React, { useEffect, useState } from "react";
import Container from "../../components/container";
import DailyMenu from "../../components/daily-menu";
import Header from "../../components/header";
import NoResult from "../../components/no-result";
import ProductList from "../../components/product-list";
import { API_BASE_URL } from "../../config";
import { appToast } from "../../utils";

export default function HomePage() {
	const [items, setItems] = useState([]);
	const [keyword, setKeyword] = useState("");
	const [noResult, setNoResult] = useState(false);
	const [selectedSorting, setSelectedSorting] = useState("");
	const [showSorting, setShowSorting] = useState(false);
	const [dailyMenuItems, setDailyMenuItems] = useState([]);

	useEffect(() => {
		loadDailyMenuItems();
	}, []);

	const loadDailyMenuItems = () => {
		fetch(`${API_BASE_URL}/dailymenu`).then(resp => resp.json()).then(items => {
			debugger
			setDailyMenuItems(items);
		}).catch(err => {
			console.log(err);
		})
	}
	
	useEffect(() => {
		loadItems();
	}, [keyword]);

	const loadItems = (sorting) => {
		if (keyword.length === 0 || keyword.length >= 3) {
			const uri = `${API_BASE_URL}/products?keyword=${keyword}&sorting=${sorting}`;
			appToast.showToast(true);
			fetch(uri)
				.then((resp) => resp.json())
				.then((data) => {
					setItems(data);
					setNoResult(data.length === 0);
					appToast.showToast(false);
				})
				.catch((err) => {
					console.log(err);
					appToast.showToast(false);
				});
		}
	};

	const onSearch = (event) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const keyword = formData.get("search");
		setKeyword(keyword);
	};

	const applySorting = () => {
		loadItems(selectedSorting);
		setShowSorting(false);
	};

	return (
		<>
			<Header
				onSubmit={onSearch}
				value={keyword}
				onChange={setKeyword}
				selectedSorting={selectedSorting}
				applySorting={applySorting}
				onSortingChange={(value) => {
					setSelectedSorting(value);
				}}
				showSorting={showSorting}
				setShowSorting={setShowSorting}
			/>
			<Container>
				<DailyMenu items={dailyMenuItems}/>
				<ProductList products={items} />
				<NoResult
					show={noResult}
					message={`${keyword}... göre bir sonuç bulunamadı!`}
				/>
			</Container>
		</>
	);
}
