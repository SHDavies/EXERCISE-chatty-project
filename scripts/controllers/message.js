'use strict';

angular.module('chattyApp')
  .controller('MessageCtrl', function ($scope, MessageService) {
  	$scope.getMessages = function() {
  		MessageService.getMessages().then(function(response) {
  			$scope.messages = response.data;
  		})
  	}();

  	$scope.addMessage = function() {
  		MessageService.addMessage($scope.newMessage)
  		.then(function(response) {
  			$scope.messages = response;
  			$scope.newMessage = "";
  		})
  	}
  });
