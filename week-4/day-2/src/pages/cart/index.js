import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddToBasket from "../../components/add-to-basket";
import Button from "../../components/button";
import Container from "../../components/container";
import Header from "../../components/header";
import { RemoveIcon } from "../../components/icons";
import NoResult from "../../components/no-result";
import { API_BASE_URL } from "../../config";
import { useShoppingCart } from "../../context/cart-context";
import { appToast, formatPrice } from "../../utils";
import "./style.css";

export default function CartPage() {
	const navigate = useNavigate();
	const [keyword, setKeyword] = useState("");
	const [items, setItems] = useState([]);
	const [showSorting, setShowSorting] = useState(false);
	const { state, removeFromCart, removeCartItems } = useShoppingCart();
	const [selectedSorting, setSelectedSorting] = useState("");
	useEffect(() => {
		loadItems();
	}, []);

	const loadItems = (sorting = "") => {
		const cache = JSON.parse(window.localStorage.getItem("cart") || "{}");
		const queryString = Object.keys(cache)
			.map((key) => {
				const id = `${key}-${cache[key].quantity}`;
				return id;
			})
			.join(",");

		const uri = `${API_BASE_URL}/cart?ids=${queryString}&sorting=${sorting}`;
		appToast.showToast(true);
		fetch(uri)
			.then((res) => res.json())
			.then((items) => {
				setItems(items);
				appToast.showToast(false);
			}).catch(err => {
				appToast.showToast(false);
			});
	};

	const getPrice = (product) => {
		const item = state[product.id];
		if (item) {
			const price = state[product.id].quantity * product.price;
			return formatPrice(price);
		}
		return null;
	};

	const filteredCartItems = items
		.filter((product) => state[product.id])
		.filter((product) =>
			product.name.toLowerCase().includes(keyword.toLowerCase())
		);

	const calculateCartTotalPrice = () => {
		let price = 0;
		filteredCartItems.forEach((product) => {
			price += state[product.id].quantity * product.price;
		});
		return formatPrice(price);
	};

	const removeAllCartItems = () => {
		if (window.confirm("sepetteki tüm ürünleri üzeresiniz emin misiniz?")) {
			removeCartItems();
		}
	};

	const removeItem = (product) => {
		if (window.confirm("sepetten ürünü silmek üzeresiniz emin misiniz?")) {
			removeFromCart(product.id);
		}
	};

	const applySorting = () => {
		loadItems(selectedSorting);
		setShowSorting(false);
	};

	return (
		<>
			<Header
				value={keyword}
				onChange={setKeyword}
				showSorting={showSorting}
				setShowSorting={setShowSorting}
				selectedSorting={selectedSorting}
				onSortingChange={setSelectedSorting}
				applySorting={applySorting}
			/>
			<Container>
				{filteredCartItems.length > 0 && (
					<Fragment>
						<ol className="list-group">
							{filteredCartItems.map((product, index) => (
								<li
									key={index}
									className="list-group-item d-flex justify-content-between align-items-start"
								>
									<div className="ms-2 me-auto d-flex align-items-center justify-content-center">
										<img onClick={() => navigate(`/urunler/${product.id}`)} src={product.image_url} className="product-image" />
										<div className="product-info">
											<div className="fw-bold">{product.name}</div>
											<div>
												{"Birim Fiyat: "} {formatPrice(product.price)}
											</div>
											<div>
												{"Toplam Fiyat: "} {getPrice(product)}
											</div>
											<div className="basket-actions">
												<AddToBasket item={product} />
											</div>
										</div>
										<RemoveIcon
											onClick={() => removeItem(product)}
											className="remove-icon"
										/>
									</div>
								</li>
							))}
						</ol>
						<ol className="list-group total-price-wrapper">
							<li className="list-group-item d-flex justify-content-between align-items-start">
								<div>Toplam Fiyat</div>
								<div>{calculateCartTotalPrice()}</div>
							</li>
						</ol>
						<div className="d-flex cart-footer">
							<div className="w-100">
								<Button
									onClick={removeAllCartItems}
									fullwidth
									className="btn btn-danger"
								>
									Sepeti Sil
								</Button>
							</div>
							<div className="w-100">
								<Button fullwidth className="btn btn-success">
									Tamamla
								</Button>
							</div>
						</div>
					</Fragment>
				)}
				<NoResult
					show={filteredCartItems.length === 0}
					message={`${
						keyword
							? "Arama kriterinize göre sepette bir ürün bulunamdı"
							: "Sepetinize henüz bir ürün eklemediniz"
					}`}
				>
					<Button
						onClick={() => {
							if (keyword) {
								setKeyword("");
							} else {
								navigate("/");
							}
						}}
					>{`${keyword ? "Arama Kriterini Sil" : "Ana Sayfa"}`}</Button>
				</NoResult>
			</Container>
		</>
	);
}
