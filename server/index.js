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
  return text.replace('Ğ','g')
        .replace('Ü','u')
        .replace('Ş','s')
        .replace('I','i')
        .replace('İ','i')
        .replace('Ö','o')
        .replace('Ç','c')
        .replace('ğ','g')
 	      .replace('ü','u')
        .replace('ş','s')
        .replace('ı','i')
        .replace('ö','o')
        .replace('ç','c').toLocaleLowerCase();
}
const readJson = async () => {
  return new Promise((resolve, reject) => {
    fs.readFile("./db/products.json", { encoding: "utf-8" }, (err, data) => {
      if (!err) {
        return resolve(JSON.parse(data))
      }
      return reject(err);
    })
  })
}

const PORT = 4000;
const app = express();

app.use(cors());

app.use(express.static("assets"))

app.get("/", (req, res, next) => {
  res.send("react bootcamp restaurant menu system api");
});

app.get("/api/products", async (req, res, next) => {
  const keyword = convertToEn(req.query.keyword || "");
  let products = await readJson();

  // ürün adı ve kategorisine göre arama yapmak için searchKeyword adında bir propert ekledik
  products = products.map(product => {
    product.searchKeyword = product.category + " " + product.name
    return product;
  })
  // eğer keyword varsa filtreledik
  if (keyword) {
    products = products.filter(x => convertToEn(x.searchKeyword).includes(keyword));
  }
  res.send(products);
})

app.listen(PORT, () => {
  console.log(`api şuanda ${PORT} portunda çalışıyor...`);
});
