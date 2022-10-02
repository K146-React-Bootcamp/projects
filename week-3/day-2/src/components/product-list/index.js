import React, { useEffect, useState } from "react";
import { formatPrice } from "../../utils";
import "./style.css";
import Button from "../button";
import { useShoppingCart } from "../../context/cart-context";

export default function ProductList({ products = [] }) {
	const cart = useShoppingCart();
	const [items, setItems] = useState([]);
	console.log("cart", cart.state);
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

	const addToBasket = (item) => {
		cart.addToCart(item);
	};

	const renderCard = (item) => {
		return (
			<div className="col-3" key={item.id}>
				<div className="card">
					<img src={item.image_url} className="card-img-top" alt={item.name} />
					<div className="card-body">
						<h5 className="card-title">{item.name}</h5>
						<div className="custom-card-footer">
							{cart.hasShoppingCart(item) ? (
								<div
									className="btn-group"
									role="group"
									aria-label="Basic example"
								>
									<button
										onClick={() => cart.updateFromCart(item, "minus")}
										className="btn btn-primary"
									>
										-
									</button>
									<button type="button" className="btn btn-primary">
										{cart.state[item.id].quantity}
									</button>
									<button
										onClick={() => cart.updateFromCart(item, "plus")}
										className="btn btn-primary"
									>
										+
									</button>
								</div>
							) : (
								<Button
									onClick={() => addToBasket(item)}
									className="btn btn-primary"
								>
									Sepete Ekle
								</Button>
							)}
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
