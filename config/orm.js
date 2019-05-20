var connection = require("./connection.js")



function getBurger() {
    connection.query('SELECT * FROM burgers', function (err, res) {
        if (err) {
            console.log(err)
        } else {
            console.log(res);
        }
        
    })
}
function updateBurger(res) {
connection.query('UPDATE burgers SET ? WHERE ? ', [{
    devoured: res.devoured,
    burger_name: res.burger_name 
}, {
    id: res.id
}], function (error) {
    if (error) {
        console.log(error)
    }
});
}

function addBurger(res) {
    connection.query('UPDATE burgers SET ? WHERE ? ', [{
        devoured: res.devoured,
        burger_name: res.burger_name 
    }], function (error) {
        if (error) {
            console.log(error)
        }
    });
    }

    module.exports= {
    getBurger,
    addBurger,
    updateBurger,


    }