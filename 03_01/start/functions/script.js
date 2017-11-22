// (function(){
//     console.log('what is going on?');
// })();

// var park = function(){
//     console.log('quite well.');
// }();

var salesman = {
    name: "vinod",
    height: 5.10,
    language: "english"
}

var run = function(){
    for (var key in salesman){
        console.log(key);
    console.log(salesman[key]);
    }
}();