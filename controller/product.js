const model = require("../model/product");
const Product = model.Product;
// Create
exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).send(product);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error });
  }
};

// Read
exports.getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.find({});
    res.send(allProducts);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error });
  }
};
exports.getproduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  res.json(product);
};
// Update
exports.replaceProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const replacedProduct = await Product.findOneAndReplace(
      { _id: id },
      req.body,
      { new: true }
    );
    res.status(201).send(replacedProduct);
  } catch (error) {
    console.error(error);
    res.status(501).send({ error });
  }
};
exports.updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedProduct = await Product.findOneAndUpdate(
      { _id: id },
      req.body,
      { new: true }
    );
    res.status(201).send(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(501).send({ error });
  }
};
// Delete
exports.deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedProduct = await Product.findOneAndDelete(
      { _id: id },
      { new: true }
    );
    res.status(201).send(deletedProduct);
  } catch (error) {
    console.error(error);
    res.status(501).send({ error });
  }
};
