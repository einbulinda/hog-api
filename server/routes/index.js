import { Router } from "express";
import productRoutes from "./productRoutes.js";
import categoryRoutes from "./categoryRoutes.js";
import subcategoryRoutes from "./subCategoryRoutes.js";

const router = Router();

router.use("/product", productRoutes);
router.use("/category", categoryRoutes);
router.use("/sub-category", subcategoryRoutes);

export default router;
