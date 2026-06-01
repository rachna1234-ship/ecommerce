const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const products = [
  {
    id: 1,
    title: "Headphones",
    price: 1999,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
  },

  {
    id: 2,
    title: "Smart Watch",
    price: 2999,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12"
  },

  {
    id: 3,
    title: "Laptop",
    price: 55999,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
  },

  {
    id: 4,
    title: "Mobile Phone",
    price: 18999,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
  }
];





app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/order", (req, res) => {

  const order = req.body;

  res.json({
    message: "Order placed successfully",
    order,
  });

});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});