angular.module('demoAppServices', ["ngResource"])
	.factory('Utils', function() {
		return {
			convertToRequest : function(headersArray, requestArray) {
				var request = {};
				for (var i = 0; i < headersArray.length; i++) {
					request[headersArray[i][0]] = [].concat(requestArray[i])[0];
				}
				return request;
			}
		};
	})

	.factory('Profile', ["$resource", function($resource) {
		return $resource("data/mysite.json", {}, {});
	}]);
