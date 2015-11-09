var app = angular.module("app",[]);

app.controller("blogCtrl", function($scope) {
    $scope.entry = {title : "Title",
                    content : "Content"};
});
