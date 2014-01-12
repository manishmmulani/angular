var appModule = angular.module("desflow", ['DesflowUtil']);

appModule.controller("RequestCtrl", ["$scope", "$http", "utils", function($scope, $http, utils) {
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
		});
}]);
