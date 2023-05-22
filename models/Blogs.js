const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    blogname: {type: String, required: true},
    categorey: {type: String, required: true},
    description:{type: String, required: true},
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true
        },
  
});
module.exports = mongoose.model('Blog', blogSchema);