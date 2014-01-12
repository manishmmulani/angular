var appModule = angular.module("desflow", []);

appModule.controller("RequestCtrl", ["$scope", "$http", function($scope, $http) {
	$http.get("data/desflow.json")
	    .success(function(data){
			$scope.headers = data["header"];
			$scope.requests = data["data"];
		});
}]);
