var demoAppModule = angular.module("demoApp", ["demoAppControllers", "ngRoute"]);

demoAppModule.config(["$routeProvider", function($routeProvider) {
	$routeProvider.
	when("/testflow",
		{
			templateUrl : "testflow.html",
			controller : "TestflowCtrl"
		}).
	when("/testflow/:requestId",
		{
			templateUrl : "testflowRequest.html",
			controller : "TestflowRequestCtrl"
		}).
	when("/mysite/:username",
		{
			templateUrl : "mysite.html",
			controller : "MysiteCtrl"
		}).
	otherwise(
		{
			redirectTo : "/testflow"
		});
}]);
