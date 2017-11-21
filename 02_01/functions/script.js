var calc = {
  status: "A great javascript object.",
  plus: function(a, b){
    return (
      console.log(a+b),
      console.log(this),
      console.log(arguments),
      console.log(this.status)
    );
  }
}

calc.plus(4,9);