import React, { useRef, useState } from "react";
import { useShoppingCart } from "../../context/cart-context";
import Modal from "../modal";
import classes from "./style.module.css";

const sortingItems = [
	{ value: "price-asc", title: "Fiyata Göre Artan" },
	{ value: "price-desc", title: "Fiyata Göre Azalan" },
	{ value: "name-asc", title: "Ürün [a-z]" },
	{ value: "name-desc", title: "Ürün [z-a]" },
];
export default function Header({ onSubmit, value, onChange, selectedSorting="price-asc" }) {
	const [showSorting, setShowSorting] = useState(false);
	const { getCartCount } = useShoppingCart();
	const ref = useRef();
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-light sticky-top ">
				<div className="container-fluid">
					<a className="navbar-brand" href="/">
						React Bootcamp Restaurant Menu App
					</a>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link" href="/anket">
									Anket
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Sepetim {`(${getCartCount()})`}
								</a>
							</li>
						</ul>
						<form ref={ref} onSubmit={onSubmit} className={classes.searchForm}>
							<input
								value={value}
								onChange={(e) => onChange(e.target.value)}
								name="search"
								className={classes.input}
								placeholder="Ürün ara..."
								aria-label="Search"
							/>
							{value && (
								<button
									onClick={() => {
										onChange("");
									}}
									className={classes.remove}
								>
									<span className="material-symbols-outlined">close</span>
								</button>
							)}
							<button
								className={classes.search}
								onClick={() => setShowSorting(true)}
							>
								<span className="material-symbols-outlined">filter_list</span>
							</button>
						</form>
					</div>
				</div>
			</nav>
			<Modal
				show={showSorting}
				onClose={() => setShowSorting(false)}
				title="Sıralama"
			>
				<ul className={classes.ul}>
					{sortingItems.map((item) => (
						<li className={classes.li} key={item.value}>
							{item.title}
							{selectedSorting === item.value && (
								<span className="material-symbols-outlined">done</span>
							)}
						</li>
					))}
				</ul>
			</Modal>
		</>
	);
}
