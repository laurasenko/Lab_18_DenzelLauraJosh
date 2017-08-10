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
  $scope.posts = [];  
  var token = pokeService.getPokemonData();
    token.then(function(response) {
        $scope.posts = response.data.data;
    });
});