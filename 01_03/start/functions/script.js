var addition = function plus(a, b){
    return (
        console.log( a + b),
        console.log(this),
        console.log(arguments)
    );
}(3, 5);