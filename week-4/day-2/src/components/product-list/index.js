import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { formatPrice } from "../../utils";
import AddToBasket from "../add-to-basket";
import ProductCard from "../product-card";

import "./style.css";

export default function ProductList({
	products = [],
	showCategoryLink = true,
}) {
	const [items, setItems] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		handleProducts();
	}, [products]);

	const handleProducts = () => {
		const state = [];
		products.forEach((product) => {
			const index = state.findIndex((x) => x.id === product.category_id);
			if (index === -1) {
				state.push({
					id: product.category_id,
					name: product.category,
					products: [product],
				});
			} else {
				state[index].products.push(product);
			}
		});
		setItems(state);
	};

	return (
		<>
			{items.map((item, index) => {
				return (
					<div className="row category-row" key={index}>
						<div className="col-10">
							<div className="category-title">{item.name}</div>
						</div>
						<div
							className="col-2 seeAll"
							style={{ visibility: showCategoryLink ? "visible" : "hidden" }}
						>
							<Link to={`/kategoriler/${item.id}`}>Tümünü Gör</Link>
							<span className="material-symbols-outlined">chevron_right</span>
						</div>
						<div className="row product-row">
							{item.products.map((product, index) => (
								<ProductCard
									key={index}
									item={product}
									containerProps={{
										className: "col-3",
									}}
								/>
							))}
						</div>
					</div>
				);
			})}
		</>
	);
}
