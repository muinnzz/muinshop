const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/order", (req, res) => {
  const { name, phone } = req.body;

  const message = `Order dari ${name}, Phone: ${phone}`;
  const whatsappURL = `https://wa.me/60166173129?text=${encodeURIComponent(message)}`;

  res.redirect(whatsappURL);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server jalan bro"));
