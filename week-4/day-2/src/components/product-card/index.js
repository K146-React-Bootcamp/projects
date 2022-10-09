import React from "react";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../../utils";
import AddToBasket from "../add-to-basket";

export default function ProductCard({
	item,
	containerProps = {},
	cardProps = {},
}) {
	const navigate = useNavigate();

	if (!item) {
		return null
	}
	return (
		<div
			onClick={() => {
				navigate(`/urunler/${item.id}`);
			}}
			{...containerProps}
		>
			<div className="card" {...cardProps}>
				<img src={item.image_url} className="card-img-top" alt={item.name} />
				<div className="card-body">
					<h5 className="card-title">{item.name}</h5>
					<div className="custom-card-footer">
						<AddToBasket item={item} />
						<span>{formatPrice(item.price)}</span>
					</div>
				</div>
			</div>
		</div>
	);
}
