import Category from "../models/Category.js";

const CategoryController = {
  index: async (req, res) => {
    try {
      const categories = await Category.find({});
      res.status(200).json(categories);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  read: async (req, res) => {
    const categoryId = req.params.id;

    try {
      const category = await Category.findById(categoryId);

      return !category
        ? res.status(404).json({ error: "Category Not Found" })
        : res.status(200).json(product);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  store: async (req, res) => {
    const { name, status } = req.body;

    try {
      //Check if category record exists
      const existingCategory = await Category.findOne({ name });
      if (existingCategory)
        res.status(400).json({ error: "Category with this name exists" });

      //Save new Entry
      const newCategory = new Category({ name, status });
      const savedCategory = await newCategory.save();
      res.status(201).json(savedCategory);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  update: async (req, res) => {
    const categoryId = req.params.id;
    const updatedCategoryData = req.body;

    try {
      const updatedCategory = await Category.findByIdAndUpdate(
        categoryId,
        updatedCategoryData,
        { new: true }
      );
      if (!updatedCategory)
        res.status(404).json({ error: "Category Not Found" });
      else res.status(200).json(updatedCategory);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  destroy: async (req, res) => {
    const categoryId = req.params.id;

    try {
      const deleteCategory = await Category.findByIdAndDelete(categoryId);
      if (!deleteCategory) res.status(404).json({ error: "Product Not Found" });
      else res.status(200).json({ message: "Category Deleted Successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

export default CategoryController;
