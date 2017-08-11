var url = "http://pokeapi.co/api/v2/1";

var app = angular.module("pokeApp");


app.service("fizzBuzzService", function() {

    function toFizzBuzz(num) {
        
        if (num % 15 ===0){
      		console.log("FizzBuzz");
      		return "FizzBuzz";
    	} else if (num % 5 === 0){
      		console.log("Buzz");
      		return "Buzz";
    	} else if (num % 3 === 0){
      		console.log("Fizz");
      		return "Fizz";
    	} else {
      		console.log(num);
      		return num + " is neither Fizzy or Buzzy!";
    	}
    }
    // When using service, set method on `this`.
    this.toFizzBuzz = toFizzBuzz;
});

app.service('pokeService', function($http) {
    this.getPokemonData = function(id) {
        var url = "https://pokeapi.co/api/v2/pokemon/";

        var promise = $http.get(url + id);

        return promise;
    }
});





 