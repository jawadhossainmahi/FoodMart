import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    business_id: { type: String, default: 1 },
    role_id:{type:Number,default:null},
    first_name: { type: String },
    last_name: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
})

const User = mongoose.model('user', userSchema);
export default User;
