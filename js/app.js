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

});

pokeApp.controller("fizzBuzzController", function($scope, service) {
	//initializes empty array
	//$scope.words = {};   
    // Add a variable called "setInput" to the scope.
    //$scope.setInput = function() {
    //	madLibsService.setInput($scope.words);
    //	$location.path("/display");
    var fizzBuzz;
    $scope.fizzBuzz = function () {
    	service.fizzBuzz($scope.fizzBuzz)
    }

    
});

pokeApp.controller("pokeController", function($scope, service) {
	//initializes empty array
	$scope.pokemonTraits = {};   
    // Add "pokeTraits" to the scope.
    $scope.pokeTraits = function() {
    	service.pokeTraits($scope.pokemonTraits);
    	//$location.path("/display");
    }
    
});

