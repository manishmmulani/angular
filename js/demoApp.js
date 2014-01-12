var demoAppModule = angular.module("demoApp", ["demoAppControllers", "ngRoute"]);

demoAppModule.config(["$routeProvider", function($routeProvider) {
	$routeProvider.
	when("/desflow",
		{
			templateUrl : "desflow.html",
			controller : "DesflowCtrl"
		}).
	when("/desflow/:requestId",
		{
			templateUrl : "desflowRequest.html",
			controller : "DesflowRequestCtrl"
		}).
	when("/mysite/:username",
		{
			templateUrl : "mysite.html",
			controller : "MysiteCtrl"
		}).
	otherwise(
		{
			redirectTo : "/desflow"
		});
}]);
