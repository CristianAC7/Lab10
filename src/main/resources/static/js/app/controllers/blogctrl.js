var app = angular.module("app",[]);

app.controller("blogCtrl", function($scope,$log) {
    $scope.entry = {title : "Title",
                    content : "Content"};
    $log.debug('se creo el $scope');
});
