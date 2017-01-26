var app = angular.module("myApp");

app.controller('MainController', function($scope) {
	//$scope.modals
	$scope.title = "Hello ma'lady...";
	$scope.promo = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quisquam unde aperiam reiciendis quos harum consequuntur dolorem delectus velit minima, tempore odit blanditiis facilis voluptas, expedita quo laboriosam cupiditate fugit!';
	$scope.favoriteGame;
	$scope.favoriteSuperhero;
	$scope.value = 1;
	$scope.funky = ":(";

	//$scope.functions
	$scope.isBold = function() {
		return $scope.value % 2 === 0; };
	$scope.isItalic = function() {
		return $scope.value % 3 === 0; };
	$scope.isUnderlined = function() {
		return $scope.value % 5 === 0; };
	$scope.isFunky = function() {
		if($scope.value % 10 === 0){
			$scope.funky = "YEA";
		}
		return $scope.value % 10 === 0; };
	//$scope.repeat
	$scope.countries = [
			{id: 1, name: "Kazakhstan", population:3054015, cont:"umbrae"},
			{id: 2, name: "Sri Lanka", population:46889, cont:"cardiospasm"},
			{id: 3, name: "Pakistan", population:764411, cont:"agonizedly"},
			{id: 4, name: "Estonia", population:9654801, cont:"asthma"},
			{id: 5, name: "Tajikistan", population:87, cont:"fumigatory"},
			{id: 6, name: "Denmark", population:23854, cont:"undraped"},
			{id: 7, name: "Philippines", population:626190, cont:"hagborn"}
		];
});
