const mongoose = require('mongoose');
const {Schema} = mongoose;

const budgetSchema = new Schema({
    title: String,
    amount: Number,
    dateCreated: Date,
    dateFinished: Date,
    category: String,
    balanceBudget: Number,
    _user: {type:Schema.Types.ObjectId, ref: 'User'} 
});

mongoose.model('budgets', budgetSchema);