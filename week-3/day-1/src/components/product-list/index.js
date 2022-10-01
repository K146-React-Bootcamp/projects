import React, { useEffect, useState } from "react";
import "./style.css";


export default function ProductList({ products = [] }) {
	const [items, setItems] = useState([]);
	// {id: "1", name: "içecek", products: []}
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
			<div className="col-3">
				<div className="card" style={{ width: "18rem" }}>
					<img src={item.image_url} className="card-img-top" alt={item.name} />
					<div className="card-body">
						<h5 className="card-title">{item.name}</h5>
						<a href="#" className="btn btn-primary">
							Sepete Ekle
						</a>
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
						<div className="col-2">
							<div>Tümünü Gör</div>
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
