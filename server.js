const express = require("express");

const {router} = require("./controllers/burgers_controller");

const {app} = require("./views/index.handlebars");

app.listen(3000, () => {

    console.log('app is runnig -> PORT 3000');
    
    });

    