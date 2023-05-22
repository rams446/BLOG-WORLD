const mongoose = require('mongoose');
// Ensure the Category model is processed by Mongoose
require('./Category');

const itemSchema = require('./homeBlogschema');

module.exports = mongoose.model('Homeblogs', 'homeBlogschema');