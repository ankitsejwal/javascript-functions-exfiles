var speak = function(say){
  console.log(say);
};

var Dog = function(){
  var name, breed;
};

var Cat = function(){
  var name, breed;
}

Dog.prototype.speak = speak;
Cat.prototype.speak = speak;

var jack = new Dog;
var cat1 = new Cat;

jack.name = "Jack";
jack.breed = "German Shepherred";
jack.speak = "Woof!";

cat1.name = "james";
cat1.breed = "Maux";
cat1.speak = "Meow";

