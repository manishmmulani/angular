var demoAppControllersModule = angular.module("demoAppControllers", ["demoAppServices"]);

demoAppControllersModule
.controller("TestflowCtrl", ["$scope", "$http", "Utils", function($scope, $http, Utils) {
	$scope.requestOrder = 'request_id';
    $scope.reverse = false;

	$scope.setRequestOrder = function(requestField) {
		$scope.requestOrder = requestField;
		$scope.reverse = !$scope.reverse;
	};

	$http.get("data/testflow.json")
	    .success(function(data){
			$scope.headers = data["header"];

			var requests = [];
			angular.forEach(data["data"], function(requestArray) {
				requests.push(Utils.convertToRequest($scope.headers, requestArray));
			});
			$scope.requests = requests;
			console.log(requests[0]);
		});
}])

.controller("TestflowRequestCtrl", ["$scope", "$routeParams", function($scope, $routeParams) {
	console.log($routeParams["requestId"]);
}])

.controller("MysiteCtrl", ["$scope", "$routeParams", "Profile", function($scope, $routeParams, Profile) {
	$scope.fields =
		Profile.get({username: $routeParams["username"]},
			function(profile) {
				$scope.imageURL = profile["large_img_url"];
			});
	console.log($routeParams["username"]);
}]);
