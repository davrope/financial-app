const express = require('express');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const passport = require('passport');
const mongoose = require('mongoose');


require('./models/User');
require('./models/Transactions');
require('./services/passport');
require('./models/Budgets');


const app= express();

mongoose.Promise= global.Promise;
mongoose.connect(keys.mongoURI,  { useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge:30*24*60*60*1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/transactionsRoutes')(app)
require('./routes/budgetsRoutes')(app)


if (process.env.NODE_ENV === 'production'){
    //Express will serve up production assets
    //like our main.js file, or main.css file
    app.use(express.static('client/build'));

    //Express will serve up the index.html file
    //if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT)
