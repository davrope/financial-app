// const _ = require('lodash');
// const Path = require('path-parser');
// const {URL} = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
// const {text, json} = require('express');

const Transaction = mongoose.model('transactions');

module.exports = app=>{
    app.post('/api/transactions', requireLogin, (req, res)=>{
        const {title, amount, category, typeTransaction} = req.body;

        const transaction = new Transaction({
            title,
            amount,
            dateCreated : new Date(),
            category,
            typeTransaction,
        })
        try{
            transaction.save();
        } catch(err){
            res.status(422).send(err)
        }
    });

    app.get('/api/transactions', requireLogin, async (req, res)=>{
        const transactions = await Transaction.find({_user: req.user.id}).select({

        });
        res.send(transactions);
    });

    app.get('/api/transactions/:id', requireLogin, async(req, res)=>{
        const fetchedTransaction = await Transaction.findById(req.params.id).select({

        });

        if(!fetchedTransaction) return res.status(404).send("Transaction not found");

        res.send(fetchedTransaction)
    });

    app.delete('/api/transactions/:id', async (req, res)=>{
        const deletedTransaction = await Transaction.findByIdAndDelete(req.params.id);
        res.send(deletedTransaction);
    });



}