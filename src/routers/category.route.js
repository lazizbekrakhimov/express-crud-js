import { Router } from "express";
import category from "../controllers/category.controller.js";

const router = Router();

router
    .post("/", category.create)
    .get("/", category.findAll)
    .get("/:id", category.findOne)
    .patch("/:id", category.update)
    .delete("/:id", category.remove)

export default router