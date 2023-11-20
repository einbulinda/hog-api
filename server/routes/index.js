import { Router } from "express";
import productRoutes from "./productRoutes.js";
import categoryRoutes from "./categoryRoutes.js";

const router = Router();

router.use("/product", productRoutes);
router.use("/category", categoryRoutes);

export default router;
