require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const path = require("path");
const productRouter = require("./routes/product");

// Body Parse for json
// bwpGKGpRyvVbtpyy

console.log(process.env.DB_PASSWORD);
// db connection
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("database connected");
}
// middlewares
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));
app.use("/products", productRouter.router);
app.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});
app.listen(process.env.PORT, () => {
  console.log("Server Started!");
});
// mongodb+srv://murtazatankiwala:3fiBAIVA0eXFc0zI@cluster0.ajubcrf.mongodb.net/?retryWrites=true&w=majority
