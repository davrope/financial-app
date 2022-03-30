const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Budget = mongoose.model('budgets');

module.exports = app=>{
    app.post('/api/budgets', requireLogin, (req, res)=>{
        const {title, amount, dateCreated, dateFinished, category} = req.body;

        const budget = new Budget({
            title,
            amount, 
            dateCreated,
            dateFinished,
            category,
            // balanceBudget to define!!!!
            _user: req.user.id,

        })
        try{
            budget.save();
        } catch(err){
            res.status(422).send(err)
        }
    });

    app.get('/api/budgets', requireLogin, async (req, res)=>{
        const budgets = await Budget.find({_user:req.user.id}).select({

        });
        res.send(budgets)
    });

    app.get('/api/budgets/:id', async (req, res)=>{
        const fetchedBudget = await Budget.findById(req.params.id).select({
        });
    
        if(!fetchedBudget) return res.status(404).send("Budget not found");
    
        res.send(fetchedBudget);
    });

    app.delete('/api/budgets/:id', async (req, res) =>{

        const deletedBudget = await Budget.findByIdAndDelete(req.params.id);
    
        res.send(deletedBudget);
      });

    
}