var pokeApp = angular.module("pokeApp", ["ngRoute"]);

pokeApp.config(function($routeProvider) {
	
	$routeProvider.when("/api", {
		templateUrl: "partials/api.html",
		controller: "pokeController"	
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

    $scope.$watch("number", function(number) {
        $scope.pokeFizzBuzz = fizzBuzzService.toFizzBuzz(number);
    });
});



pokeApp.controller("pokeController", function ($scope, pokeService) {
  $scope.posts = [];  
  var token = pokeService.getPokemonData();
    token.then(function(response) {
        $scope.posts = response.data.data;
    });
});

/*
pokeApp.controller("fizzBuzzController", function($scope, service) {
	//initializes empty string
	//$scope.fizzBuzzInput;   
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
*/
