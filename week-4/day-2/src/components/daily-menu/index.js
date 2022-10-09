import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function DailyMenu({ items = [] }) {
  const navigate = useNavigate();
	return (
    <>
      {items.length > 0 && (
        <h4>Günün Menüsü</h4>
      )}
			<Carousel className="daily-product-wrapper">
				{items.map((product) => (
					<Carousel.Item key={product.id}>
            <img
              onClick={() => navigate(`/urunler/${product.id}`)}
							className="d-block w-100 daily-product-img"
							src={product.image_url}
							alt={product.name}
						/>
						<Carousel.Caption>
							<h3>{product.name}</h3>
							{/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
						</Carousel.Caption>
					</Carousel.Item>
				))}
			</Carousel>
		</>
	);
}
