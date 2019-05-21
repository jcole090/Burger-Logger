const express = require("express");

const {router} = require("./controllers/burgers_controller");

const exphbs = require('express-handlebars');

const app = express();

var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

app.get('/', (req, res) => {

res.render('index');

});

app.listen(port, () => {

    console.log(`app is runnig -> PORT ${port}`);
    
    });

    