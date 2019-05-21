$("#handleForm").submit(function() {
var name = $("#bInput").val().trim();
var eaten = $("#eInput").val().trim();

var data = {name, eaten}

$.post("/", data, function(data, status){
console.log(`${data} and status is ${status}`)
});


console.log(name)
console.log(eaten)

});

