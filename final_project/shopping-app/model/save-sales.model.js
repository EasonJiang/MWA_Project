const mongoose = require('./db');
const saveSalesSchem = new mongoose.Schema({
    productId:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    payment: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    account: {
        type: String,
        required: true
    }
});

const saveSalesModel = mongoose.model('sales', saveSalesSchem);

module.exports = saveSalesModel;
