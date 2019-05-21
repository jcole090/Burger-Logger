const express = require("express");

const {router} = require("./controllers/burgers_controller");

const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

app.get('/', (req, res) => {

res.render('index');

});

app.listen(3000, () => {

    console.log('app is runnig -> PORT 3000');
    
    });

    