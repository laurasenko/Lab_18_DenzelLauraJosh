var url = "http://pokeapi.co/api/v2/1";

var app = angular.module("pokeApp");


app.service("fizzBuzzService", function() {

    function toFizzBuzz(num) {
        
        if (num % 15 ===0){
      		console.log("FizzBuzz");
      		return "FizzBuzz";
    	} else if (num % 5 === 0){
      		console.log("Fizz");
      		return "Fizz";
    	} else if (num % 3 === 0){
      		console.log("Buzz");
      		return "Buzz";
    	} else {
      		console.log(num);
      		return num;
    	}
    }
    // When using service, set method on `this`.
    this.toFizzBuzz = toFizzBuzz;
});

app.service('pokeService', function($http) {
    this.getPokemonData = function() {
        var url = "http://pokeapi.co/api/v2";

        var promise = $http.get("http://pokeapi.co/api/v2/");

        return promise;
    }
});





 