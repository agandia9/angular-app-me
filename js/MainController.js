var app = angular.module("myApp", ["services"]);
app.value('myName', "Alex");

app.controller("webDev", ["$scope", "job", function($scope, job){
	$scope.myJob = job;
}]); 

app.controller('MainController',["$scope", "myName", function($scope, myName) {
	//$scope simply modals
	$scope.title = "Hello ma'lady...";
	$scope.promo = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quisquam unde aperiam reiciendis quos harum consequuntur dolorem delectus velit minima, tempore odit blanditiis facilis voluptas, expedita quo laboriosam cupiditate fugit!';
	$scope.favoriteGame;
	$scope.favoriteSuperhero;
	$scope.value = 1;
	$scope.funky = ":(";
	//$scope injected to controller! from line 2
	$scope.myName = myName;

	//$scope.functions (ng-class)
	$scope.isBold = function() {
		return $scope.value % 2 === 0;
	};
	$scope.isItalic = function() {
		return $scope.value % 3 === 0;
	};
	$scope.isUnderlined = function() {
		return $scope.value % 5 === 0;
	};
	$scope.isFunky = function() {
		if ($scope.value % 10 === 0) {
			$scope.funky = "YEA";
		}
		return $scope.value % 10 === 0;
	};

	//$scope repeat (ng-repeat)
	$scope.countries = [
		{ id: 1, name: "Kazakhstan", population: 3054015, cont: "umbrae" },
		{ id: 2, name: "Sri Lanka", population: 46889, cont: "cardiospasm" },
		{ id: 3, name: "Pakistan", population: 764411, cont: "agonizedly" },
		{ id: 4, name: "Estonia", population: 9654801, cont: "asthma" },
		{ id: 5, name: "Tajikistan", population: 87, cont: "fumigatory" },
		{ id: 6, name: "Denmark", population: 23854, cont: "undraped" },
		{ id: 7, name: "Philippines", population: 626190, cont: "hagborn" }
	];
}]);

app.controller('secondController', function($scope) {
	//$scope booleans values - ng-if/ng-show
	$scope.isFirstElementVisible = true;
	$scope.isSecondElementVisible = true;

});




