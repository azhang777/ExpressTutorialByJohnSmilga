const express = require("express");
const { products } = require("./data");
const app = express();
/*
app.get("/", (req, res) => {
  res.json(products);
});
*/

app.get("/", (req, res) => {
  res.send("<h1> Home Page </h1> <a href='/api/products'> products </a>");
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

app.get("/api/products/1", (req, res) => {
  const singleProduct = products.find((product) => product.id === 1);
  res.json(singleProduct);
});

app.get("/api/products/:productID", (req, res) => {
  //console.log(req);
  //console.log(req.params);
  const { productID } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  if (!singleProduct) {
    res.status(404).send("Product does not exist!");
  }
  res.json(singleProduct);
});

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params);
  res.send("hello world");
});
app.listen(6313, () => {
  console.log("app is listening to port 6313");
});
