import React, { useEffect, useState } from "react";
import { formatPrice } from "../../utils";
import "./style.css";
import { useShoppingCart } from "../../context/cart-context";
import AddToBasket from "../add-to-basket";

export default function ProductList({ products = [] }) {
	const cart = useShoppingCart();
	const [items, setItems] = useState([]);
	
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

	const renderCard = (item) => {
		return (
			<div className="col-3" key={item.id}>
				<div className="card">
					<img src={item.image_url} className="card-img-top" alt={item.name} />
					<div className="card-body">
						<h5 className="card-title">{item.name}</h5>
						<div className="custom-card-footer">
							<AddToBasket item={item}/>
							<span>{formatPrice(item.price)}</span>
						</div>
					</div>
				</div>
			</div>
		);
	};

	return (
		<>
			{items.map((item, index) => {
				return (
					<div className="row category-row" key={index}>
						<div className="col-10">
							<div className="category-title">{item.name}</div>
						</div>
						<div className="col-2 seeAll">
							<div>Tümünü Gör</div>
							<span className="material-symbols-outlined">chevron_right</span>
						</div>
						<div className="row product-row">
							{item.products.map((product, index) => renderCard(product))}
						</div>
					</div>
				);
			})}
		</>
	);
}
