import Category from "../schemas/category.schema.js";
import { ApiError } from "../utils/custom-error.js";
import { successRes } from "../utils/succes-response.js";
import { errorRes } from "../utils/error-response.js";

class CategoryController {
    async create(req, res) {
        try {
            const category = await Category.findOne({ name: req.body.name });
            if (category) {
                throw new ApiError('category already exist', 409)
            }
            const newCategory = await Category.create(req.body);
            return successRes(res, newCategory, 201)
        } catch (err) {
            return errorRes(res, err)
        }
    }

    async findAll(_req, res) {
        try {
            const categories = await Category.find();
            return successRes(res, categories)
        } catch (err) {
            return errorRes(res, err)
        }
    }

    async findOne(req, res) {
        try {
            const category = await Category.findById(req.params?.id);
            if (!category) {
                throw new ApiError('category not found', 404)
            };
            return successRes(res, category)
        } catch (err) {
            return errorRes(res, err);
        }
    }

    async update(req, res) {
        try {
            const category = await Category.findById(req.params?.id);
            if (!category) {
                throw new ApiError('category not found', 404)
            };
            const updateCategory = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
            return successRes(res, updateCategory)
        } catch (err) {
            return errorRes(res, err)
        }
    }

    async remove(req, res) {
        try {
            const category = await Category.findByIdAndDelete(req.params.id);
            if (!category) {
                throw new ApiError('category not found', 404)
            };
            return successRes(res, {})
        } catch (err) {
            return errorRes(res, err)
        }
    }
}

export default new CategoryController