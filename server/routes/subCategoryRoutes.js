import { Router } from "express";
import SubCategoryController from "../controllers/SubCategoryController.js";

const router = Router();

router.get("/", SubCategoryController.index);
router.get("/:id", SubCategoryController.read);
router.post("/", SubCategoryController.store);
router.put("/:id", SubCategoryController.update);
router.delete("/:id", SubCategoryController.destroy);

export default router;
