const mongoose = require('mongoose');

const {Schema} = mongoose;

const transactionSchema = new Schema({
    title: String,
    amount: Number,
    dateCreated: Date,
    category: String,
    typeTransaction: String,
    _user: {type:Schema.Types.ObjectId, ref: 'User'}

});

mongoose.model('transactions', transactionSchema);