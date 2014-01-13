var demoAppControllersModule = angular.module("demoAppControllers", ["DesflowUtil"]);

demoAppControllersModule
.controller("DesflowCtrl", ["$scope", "$http", "utils", function($scope, $http, utils) {
	$scope.requestOrder = 'request_id';
    $scope.reverse = false;

	$scope.setRequestOrder = function(requestField) {
		$scope.requestOrder = requestField;
		$scope.reverse = !$scope.reverse;
	};

	$http.get("data/desflow.json")
	    .success(function(data){
			$scope.headers = data["header"];

			var requests = [];
			angular.forEach(data["data"], function(requestArray) {
				requests.push(utils.convertToRequest($scope.headers, requestArray));
			});
			$scope.requests = requests;
			console.log(requests[0]);
		});
}])

.controller("DesflowRequestCtrl", ["$scope", "$routeParams", function($scope, $routeParams) {
	console.log($routeParams["requestId"]);
}])

.controller("MysiteCtrl", ["$scope", "$routeParams", "$http", function($scope, $routeParams, $http) {
	$http.get("data/mysite.json")
		.success(function(data){
			$scope.fields = data;
		});
	console.log($routeParams["username"]);
}]);
