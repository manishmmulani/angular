var appModule = angular.module("helloworld", []);

appModule.controller("NickCtrl", function($scope) {
	$scope.nickNames = {
		"Manish" : "Mulani",
		"Shashank" : "Banka",
		"Ramesh" : "Ramesh Garu",
		"Ram" : "Ramuu",
		"Ira" : "Madam"
	};

	$scope.getNick = function() {
		return $scope.nickNames[$scope.inputName] || "Bond";
	};

});
