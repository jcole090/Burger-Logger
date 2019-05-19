var connection = require("./connection.js")



function GetItems() {
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
    devoured: res[0].devoured,
    burger_name: res[0].burger_name 
}, {
    id: res[0].id
}], function (error) {
    if (error) {
        console.log(error)
    }
});
}

function addBurger(res) {
    connection.query('UPDATE burgers SET ? WHERE ? ', [{
        devoured: res[0].devoured,
        burger_name: res[0].burger_name 
    }], function (error) {
        if (error) {
            console.log(error)
        }
    });
    }