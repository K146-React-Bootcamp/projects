// import express from "express"

const express = require("express");
const fs = require("fs");
const cors = require("cors");
/**
 *
 * @param {string} text
 * @returns string
 */
const convertToEn = (text) => {
	return text
		.replace("Ğ", "g")
		.replace("Ü", "u")
		.replace("Ş", "s")
		.replace("I", "i")
		.replace("İ", "i")
		.replace("Ö", "o")
		.replace("Ç", "c")
		.replace("ğ", "g")
		.replace("ü", "u")
		.replace("ş", "s")
		.replace("ı", "i")
		.replace("ö", "o")
		.replace("ç", "c")
		.toLocaleLowerCase();
};
const readJson = async (path = "./db/products.json") => {
	return new Promise((resolve, reject) => {
		fs.readFile(path, { encoding: "utf-8" }, (err, data) => {
			if (!err) {
				return resolve(JSON.parse(data));
			}
			return reject(err);
		});
	});
};

const PORT = 4000;
const app = express();

app.use(cors());

app.use(express.static("assets"));

app.get("/", (req, res, next) => {
	res.send("react bootcamp restaurant menu system api");
});

const sortingFunctions = {
	"price-asc": (a, b) => (parseFloat(a.price) < parseFloat(b.price) ? -1 : 1),
	"price-desc": (a, b) => (parseFloat(a.price) < parseFloat(b.price) ? 1 : -1),
	"name-asc": (a, b) => (convertToEn(a.name) < convertToEn(b.name) ? -1 : 1),
	"name-desc": (a, b) => (convertToEn(a.name) < convertToEn(b.name) ? 1 : -1),
};

const duration = 2000;

const delay = (cb) => {
	setTimeout(cb, duration);
};

app.get("/api/products", async (req, res, next) => {
	const keyword = convertToEn(req.query.keyword || "");
	const categoryId = req.query.categoryId || "";
	const productId = req.query.id || "";
	// gelebilecek olan sorting parametreleri
	// price-asc | price-desc | name-asc | name-desc | ""
	const sorting = convertToEn(req.query.sorting || "");

	let products = await readJson();

	if (productId) {
		delay(() => {
			res.send(products.find((product) => product.id.toString() === productId));
		});
		return;
	}

	if (categoryId != "") {
		products = products.filter(
			(product) => product.category_id.toString() === categoryId
		);
	}

	// ürün adı ve kategorisine göre arama yapmak için searchKeyword adında bir propert ekledik
	products = products.map((product) => {
		product.searchKeyword = product.category + " " + product.name;
		return product;
	});
	// eğer keyword varsa filtreledik
	if (keyword) {
		products = products.filter((x) =>
			convertToEn(x.searchKeyword).includes(keyword)
		);
	}

	// basit kullanım
	// if (sorting === "price-asc") {
	//   // fiyata göre küçükten büyüğe sırala
	//   products = products.sort((a, b) => parseFloat(a.price) < parseFloat(b.price) ? -1 : 1)
	// }
	// if (sorting === "price-desc") {
	//   // fiyata göre büyükten küçüğe sırala
	//   products = products.sort((a, b) => parseFloat(a.price) < parseFloat(b.price) ? 1 : -1)
	// }
	// if (sorting === "name-asc") {
	//   // ürün adına göre a'den z ya sırala
	//   products = products.sort((a, b) => convertToEn(a.name) < convertToEn(b.name) ? -1 : 1)
	// }
	// if (sorting === "name-desc") {
	//   // ürün adına göre z'den a ya sırala
	//   products = products.sort((a, b) => convertToEn(a.name) < convertToEn(b.name) ? 1 : -1)
	// }

	// temiz kullanım
	const sortingFn = sortingFunctions[sorting];
	if (sortingFn) {
		products = products.sort(sortingFn);
	}

	delay(() => {
		res.send(products);
	});
});

app.get("/api/dailymenu", async (req, res, next) => {
	let products = await readJson();

	const dailyMenu = await readJson("./db/daily.json");

	const items = dailyMenu.items.map((item) => {
		const product = products.find((product) => product.id == item.id);
		return product;
	});

	delay(() => {
		res.send(items);
	});
});

app.get("/api/cart", async (req, res) => {
	// price-asc | price-desc | name-asc | name-desc | ""
	const sorting = convertToEn(req.query.sorting || "");

	const items = (req.query.ids || "").split(",").map((item) => {
		const [id, quantity] = item.split("-");
		return {
			id,
			quantity,
		};
	});

	let products = await readJson();
	products = products
		.filter((item) => items.find((x) => x.id === item.id.toString()))
		.map((product) => {
			const item = items.find((x) => x.id === product.id.toString());
			const qty = parseInt(item?.quantity || "1");
			product.quantity = qty;
			product.totalPrice = product.price * qty;
			return product;
		});
	const sortingFn = sortingFunctions[sorting];
	if (sortingFn) {
		products = products.sort(sortingFn);
	}
	delay(() => {
		res.send(products);
	});
});

app.listen(PORT, () => {
	console.log(`api şuanda ${PORT} portunda çalışıyor...`);
});
