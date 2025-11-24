import { model, Schema } from "mongoose";

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    },
    image: {
        type: String
    }
}, {
    timestamps: true,
    versionKey: false
})

export default model('category', categorySchema)