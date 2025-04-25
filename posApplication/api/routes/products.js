const Product = require("../models/Product.js");
const express = require("express");
const router = express.Router();

router.get("/get-all", async (req, res) => {
  try {
    const products = await Product.find();
    //res.send(products);
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
  }
});

router.post("/add-product", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(200).json("Item added.");
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put("/update-product", async (req, res) => {
  try {
    await Product.findOneAndUpdate({ _id: req.body.productId }, req.body);
    res.status(200).json("Item updated.");
  } catch (error) {
    console.log(error);
  }
});
router.delete("/delete-product/:id", async (req, res) => {
    try {
      await Product.findOneAndDelete({ _id: req.params.id });
      res.status(200).json("Item deleted.");
    } catch (error) {
      console.log(error);
      res.status(500).json("Bir hata oluştu");
    }
  });
  

module.exports = router;
