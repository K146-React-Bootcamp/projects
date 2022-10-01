// import express from "express"

const express = require("express");
const fs = require("fs");
const cors = require("cors");

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
  const products = await readJson();
  res.send(products);
})

app.listen(PORT, () => {
  console.log(`api şuanda ${PORT} portunda çalışıyor...`);
});
