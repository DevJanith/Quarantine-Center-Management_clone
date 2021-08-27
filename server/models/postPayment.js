import mongoose, { now } from "mongoose";

//mongo db table (schema)
const postPaymentSchema = mongoose.Schema({
    PaymentID: {
        type: String, 
        required: true,
        unique: true
    },
    PaymentMethod:{
        type: String,
        required: true
    },
    PaymentDate:{
        type: Date, 
        default: Date.now
    },
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});


const PostPayment = mongoose.model('PostPayment', postPaymentSchema);

export default PostPayment;