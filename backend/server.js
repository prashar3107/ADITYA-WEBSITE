const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({
    message: "Backend API is running successfully 🚀",
  });
});

app.get("/api/products", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Wireless Headphones",
      price: 79.99,
    },
    {
      id: 2,
      name: "Gaming Mouse",
      price: 39.99,
    },
    {
      id: 3,
      name: "Smart Watch",
      price: 149.99,
    },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});