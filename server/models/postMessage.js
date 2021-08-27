import mongoose from "mongoose";

//mongo db table (schema)
const postSchema = mongoose.Schema({
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
        default: Date.now
    },
});


const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;