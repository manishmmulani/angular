var appModule = angular.module("desflow", ['DesflowUtil']);

appModule.controller("RequestCtrl", ["$scope", "$http", "utils", function($scope, $http, utils) {
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
