import { Router } from "express";
import categoryRouter from "../routers/category.route.js";
import productRouter from "../routers/product.route.js";

const router = Router();

router.use("/category", categoryRouter);
router.use("/products", productRouter);

export default router;