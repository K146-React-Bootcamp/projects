import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/container";
import Header from "../../components/header";
import ProductCard from "../../components/product-card";
import { API_BASE_URL } from "../../config";
import { appToast } from "../../utils";

export default function ProductDetailPage() {
	const [product, setProduct] = useState();

	const params = useParams();

	useEffect(() => {
		loadItem();
	}, [params.id]);

	const loadItem = () => {
		const uri = `${API_BASE_URL}/products?id=${params.id}`;
		appToast.showToast({ show: true, message: "Ürün bilgileri yükleniyor..." });
		fetch(uri)
			.then((resp) => resp.json())
			.then((item) => {
				setProduct(item);
				appToast.showToast(false);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<>
			<Header />
			<Container>
				<div className="row">
					<ProductCard item={product} containerProps={{ className: "col-6" }} />
				</div>
			</Container>
		</>
	);
}
