import { express } from "express";
import ProductController from "../controllers/ProductController";

const router = express.Router();

router.get("/", ProductController.getAllProducts);
router.get("/:productId", ProductController.getProductById);
router.post("/", ProductController.createProduct);
router.put("/:productId", ProductController.updateProduct);
router.delete("/:productId", ProductController.deleteProduct);

module.exports = router;
