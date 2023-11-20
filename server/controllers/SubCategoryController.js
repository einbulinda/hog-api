import Subcategory from "../models/Subcategory.js";

const SubCategoryController = {
  index: async (req, res) => {
    try {
      const subcategory = await Subcategory.find({});
      res.status(200).json(subcategory);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  read: async (req, res) => {
    const objectId = req.params.id;

    try {
      const subcategory = await Subcategory.findById(objectId);

      return !subcategory
        ? res.status(404).json({ error: "Subcategory Not Found" })
        : res.status(200).json(subcategory);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  store: async (req, res) => {
    const { name, category, status } = req.body;

    try {
      const recordExists = await Subcategory.findOne({ name });
      if (!recordExists)
        res.status(400).json({ error: "Subcategory already exists" });

      // Save new entry
      const newSubcategory = new Subcategory({ name, category, status });
      const savedSubcategory = await newSubcategory.save();
      res.status(201).json(savedSubcategory);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  update: async (req, res) => {
    const objectId = req.params.id;
    const updatedSubcategoryData = req.body;

    try {
      const updatedSubcategory = await Subcategory.findByIdAndUpdate(
        objectId,
        updatedSubcategoryData,
        { new: true }
      );
      if (!updatedSubcategory)
        res.status(404).json({ error: "Subcategory Not Found" });
      else res.status(200).json(updatedSubcategory);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  destroy: async (req, res) => {
    const objectId = req.params.id;
    try {
      const deletedSubcategory = await Subcategory.findByIdAndDelete(objectId);
      if (!deletedSubcategory)
        res.status(404).json({ error: "Subcategory Not Found" });
      else
        res.status(200).json({ message: "Subcategory Deleted Successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

export default SubCategoryController;
