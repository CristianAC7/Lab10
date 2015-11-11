var app = angular.module("app",[]);

app.controller("blogCtrl", function($scope,$log,$http) {
    $scope.entry = {title : "Title",
                    content : "Content"};
    $scope.entries = [];
    $log.debug('se creo el $scope');

    $scope.loadData = function() {
        $http({
            method: "GET",
            url: "http://localhost:8080/blogs"
        }).success(function(data) {
            $scope.entries = data;
        }).error(function(data,status,headers,config) {
            alert("Ha fallado la petición. Estado HTTP:"+status);
        });
    };
    $scope.loadData();

    $scope.processForm = function() {
        $log.debug($scope.entry);
        $http({
            method  : "POST",
            url     : "http://localhost:8080/blog",
            data    : $scope.entry
        }).success(function(data) {
            console.log(data);
            $scope.loadData();
        });
    };
    
    $scope.remove = function(item) {
        var index = $scope.entries.indexOf(item);
  		$scope.entries.splice(item, 1);
  		$log.debug('se borro $scope'); 
    }
    
    $scope.selectSubObject = function(idx) {
  		$scope.selectedSubObject = angular.copy($scope.selectedMainObject.subObjects[idx]);
	}
});

