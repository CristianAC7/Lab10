var app = angular.module("app",[]);

app.controller("blogCtrl", function($scope,$log,$http) {
    $scope.entry = {title : "Title",
                    content : "Content"};
    $scope.entries = [];
    $log.debug('se creo el $scope');

    $scope.loadData = function() {
        $http({
            method: "GET",
            url: "blogs"
        }).success(function(data) {
            $scope.entries = data;
        }).error(function(data,status,headers,config) {
            alert("Ha fallado la petici�n. Estado HTTP:"+status);
        });
    };
    $scope.loadData();

    $scope.processForm = function() {
        $log.debug($scope.entry);
        $http({
            method  : "POST",
            url     : "blog",
            data    : $scope.entry
        }).success(function(data) {
            console.log(data);
            $scope.loadData();
        });
    };
    $scope.processForm();

    $scope.edit = function(){
	   $log.debug($scope.entry);
	   $http({
            method  : "PUT",
            url     : "blog",
            data    : $scope.entry
	   }).success(function(data) {
            $scope.entries = data;
            console.log(data);
         });
    };
});

