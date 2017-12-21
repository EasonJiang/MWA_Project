const mongoose = require('./db');
const productListSchem = new mongoose.Schema({
    categoryId:Number,
    categoryName:String,
    description:String,
});

const productListModel = mongoose.model('products',productListSchem);

module.exports = productListModel;
