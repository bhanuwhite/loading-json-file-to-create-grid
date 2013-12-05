/*
   * creating app variable
   * @author : saurabh
   * @purpose: controlling the index.html file
   * @date : 5 December 2013
   */
	var app = angular.module('myApp', ['ngGrid']);
	app.controller('testJob', function($scope,$http) {
		$scope.myData = [];
		$scope.gridData = true;
		$scope.gridOptions = { data: 'myData' };
	// On click the load grid function
		$scope.loadGrid = function(){
        $scope.gridData = false;		
		window.setTimeout(function(){    
		$http({method: 'POST', url: 'assets/js/data.json'}).
		success(function(data, status, headers, config) {	        		
        $scope.myData  = data;	 }).
		error(function(data, status, headers, config) {
		alert(data);
		});
		$scope.$apply();
		}, 1000)
		}
		});
/********        custom.js file closed  *****************/