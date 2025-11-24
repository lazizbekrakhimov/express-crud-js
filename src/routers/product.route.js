import { Router } from "express";
import product from "../controllers/product.controller.js";

const router = Router();

router
    .post("/", product.create)
    .get("/", product.findAll)
    .get("/:id", product.findOne)
    .patch("/:id", product.update)
    .delete("/:id", product.remove)

export default router