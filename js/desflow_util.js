angular.module('DesflowUtil', [])
	.factory('utils', function() {
		return {
			convertToRequest : function(headersArray, requestArray) {
				var request = {};
				for (var i = 0; i < headersArray.length; i++) {
					request[headersArray[i][1]] = [].concat(requestArray[i])[0];
				}
				return request;
			}
		};
	});
