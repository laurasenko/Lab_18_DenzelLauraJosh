var pokeApp = angular.module("pokeApp", ["ngRoute"]);

pokeApp.config(function($routeProvider) {

	$routeProvider.when("/fizzBuzz", {
		templateUrl: "partials/fizzBuzz.html",
		controller: "fizzBuzzController"
	});
	
	$routeProvider.when("/api", {
		templateUrl: "partials/api.html",
		controller: "pokeController"	
	});

	$routeProvider.otherwise ({
		template: "Choose a view"
});

app.controller("fizzBuzzController", function($scope, service) {
	//initializes empty array
	//$scope.words = {};   
    // Add a variable called "setInput" to the scope.
    //$scope.setInput = function() {
    //	madLibsService.setInput($scope.words);
    //	$location.path("/display");
    }
});

app.controller("pokeController", function($scope, service) {
	//initializes empty array
	$scope.pokemonTraits = {};   
    // Add an object called "pokeTraits" to the scope.
    $scope.pokeTraits = function() {
    	service.pokeTraits($scope.pokemonTraits);
    	//$location.path("/display");
    }
});

