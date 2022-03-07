const mongoose = require('mongoose');
const {Schema} = mongoose;

const budgetSchema = new Schema({
    title: String,
    amount: Number,
    dateCreated: Date,
    dateFinished: Date,
    category: String,
    balanceBudget: Number 
});

mongoose.model('budgets', budgetSchema);