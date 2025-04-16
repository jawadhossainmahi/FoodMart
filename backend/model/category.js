import mongoose from 'mongoose';
const { Schema } = mongoose;

const categorySchema = new Schema({
    title: { type: String },
    icon: { type: String, default: null },
    parent_id: { type: String, default: null }
})

const Category = mongoose.model('category', categorySchema);
export default Category;
