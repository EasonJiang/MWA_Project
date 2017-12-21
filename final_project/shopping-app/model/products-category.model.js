const mongoose = require('./db');
const productCategorySchem = new mongoose.Schema({
    categoryId:Number,
    categoryName:String,
    description:String,
});

const productCategoryModel = mongoose.model('categorys',productCategorySchem);

module.exports = productCategoryModel;
