var app = angular.module("myApp");

app.controller('MainController', function($scope) {
	$scope.title = "Hello ma'lady...";
	$scope.promo = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quisquam unde aperiam reiciendis quos harum consequuntur dolorem delectus velit minima, tempore odit blanditiis facilis voluptas, expedita quo laboriosam cupiditate fugit!';
	$scope.favoriteGame;
	$scope.favoriteSuperhero;
	$scope.value = 1;
	$scope.funky = ":(";
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
});
