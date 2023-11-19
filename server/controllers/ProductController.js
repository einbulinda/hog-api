import Product from "../models/Product";

const ProductController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getProductById: async (req, res) => {
    const productId = req.params.productId;

    try {
      const product = await Product.findById(productId);

      if (!product) {
        return res.status(404).json({ error: "Product Not Found" });
      }

      return res.status(200).json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createProduct: async (req, res) => {
    const {
      name,
      description,
      attributes,
      pricing,
      images,
      singlePrice,
      status,
      inventory_quantity,
      subcategory,
    } = req.body;

    try {
      const newProduct = new Product({
        name,
        description,
        attributes,
        pricing,
        images,
        singlePrice,
        status,
        inventory_quantity,
        subcategory,
      });

      const savedProduct = await newProduct.save();
      res.status(201).json(savedProduct);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error." });
    }
  },

  updateProduct: async (req, res) => {
    const productId = req.params.productId;
    const updatedProductData = req.body;

    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        productId,
        updatedProductData,
        { new: true }
      );

      if (!updatedProduct) {
        res.status(404).json({ error: "Product Not Found" });
      }

      res.status(200).json(updatedProduct);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error." });
    }
  },
  deleteProduct: async (req, res) => {
    const productId = req.params.productId;

    try {
      const deleteProduct = await Product.findByIdAndDelete(productId);

      if (!deleteProduct) {
        res.status(404).json({ error: "Product Not Found" });
      }

      return res.status(200).json({ message: "Product deleted successfully." });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error." });
    }
  },
};

export default ProductController;
