var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', function($scope){
$scope.click = function () {
window.alert('Clicked!')
}
});