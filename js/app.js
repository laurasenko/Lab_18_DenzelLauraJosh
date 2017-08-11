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

  	var token = pokeService.getPokemonData($scope.pokeID);
		
	token.then(function(response) {
        $scope.pokemon = response.data;
        console.log($scope.pokemon);

        $scope.name= $scope.capMe($scope.pokemon.name);
        $scope.type= $scope.capMe($scope.pokemon.types[0].type.name);
  	});
  };

  $scope.capMe = function (string) {
  	return string.charAt(0).toUpperCase() + string.slice(1);
  };
});

pokeApp.directive("pokemon", function () {
	return {
		templateUrl:"partials/pokemon.html"
	}
}).directive("move", function () {
	return {
		templateUrl:"partials/move.html",
		replace:true
	};
});