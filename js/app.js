var pokeApp = angular.module("pokeApp", ["ngRoute", "ngAnimate"]);

pokeApp.config(function($routeProvider) {
	
	$routeProvider.when("/api", {
		templateUrl: "partials/api.html",
		controller:"pokeController"	
	});

	$routeProvider.when("/fizzBuzz", {
		templateUrl: "partials/fizzBuzz.html",
		controller: "fizzBuzzController"
	});

	$routeProvider.otherwise ({
		templateUrl: "partials/api.html"
	});

});


pokeApp.controller("fizzBuzzController", function($scope, fizzBuzzService) {

	$scope.number;

    $scope.toFizzBuzz = function() {
        $scope.pokeFizzBuzz = fizzBuzzService.toFizzBuzz($scope.number);
    };
});

pokeApp.controller("pokeController", function ($scope, pokeService) {
  $scope.pokeID;

  $scope.getPokemonData = function () {
  	fizzBuzzService.setId($scope.pokeID)
  	var token = pokeService.getPokemonData($scope.pokeID);
		
	token.then(function(response) {
        $scope.pokemon = response.data;

        console.log($scope.pokemon);

  	});
  };
});

pokeApp.directive("pokemon", function () {
	return {
		templateUrl:"partials/pokemon.html"
	}
}).directive("move", function () {
	return {
		templateUrl:"partials/move.html"
	};
});