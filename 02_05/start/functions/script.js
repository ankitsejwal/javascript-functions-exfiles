var addition = function(){
    var sum = 0;
    for(var i=0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}

console.log(addition(3,4,3));