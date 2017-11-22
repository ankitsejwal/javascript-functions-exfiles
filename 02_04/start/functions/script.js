var friend = function(args){
    console.log(this.dob);
}

friend.call(idCard)

var idCard = {
    name: "sandeep",
    dob: "17/08/1990",
    address: "dharuherra"
}

