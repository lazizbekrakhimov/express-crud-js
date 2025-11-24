import Product from "../schemas/product.schema.js";
import { ApiError } from "../utils/custom-error.js";
import { successRes } from "../utils/succes-response.js";
import { errorRes } from "../utils/error-response.js"

class ProductController {
    async create(req, res) {
        try {
            const product = await Product.create(req.body);
            return successRes(res, product, 201)
        } catch (err) {
            return errorRes(res, err)
        }
    }

    async findAll(_req, res) {
        try {
            const product = await Product.find().populate('category');
            return successRes(res, product)
        } catch (err) {
            return errorRes(res, err)
        }
    }

    async findOne(req, res) {
        try {
            const product = await Product.findById(req.params.id).populate('category');
            if (!product) {
                throw new ApiError('product not found', 404)
            }
            return successRes(res, product)
        } catch (err) {
            return errorRes(res, err)
        }
    }

    async update(req, res) {
        try {
            const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('category');
            if (!product) {
                throw new ApiError('product not found', 404)
            }
            return successRes(res, product)
        } catch (err) {
            return errorRes(res, err)
        }
    }

    async remove(req, res) {
        try {
            const product = await Product.findByIdAndDelete(req.params.id);
            if (!product) {
                throw new ApiError('product not found', 404)
            };
            await Product.findByIdAndDelete(req.params.id);
            return successRes(res, {})
        } catch (err) {
            return errorRes(res, err)
        }
    }
}

export default new ProductController()