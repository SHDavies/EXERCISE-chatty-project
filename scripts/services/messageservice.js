'use strict';

angular.module('chattyApp')
  .service('MessageService', function MessageService($q, $http) {
    this.getMessages = function() {
    	var deferred = $q.defer();
    	$http.get('http://localhost:8887')
    	.then(function(response) {
    		deferred.resolve(response);
    	})

    	return deferred.promise;
    }

    this.addMessage = function(newMessage) {
      var deferred = $q.defer();

      $http({
        method: 'POST',
        url: 'http://localhost:8887',
        data: {
          message: newMessage
        }
      }).success(function(data) {
        deferred.resolve(data);
      });

      return deferred.promise;
    }
  });
