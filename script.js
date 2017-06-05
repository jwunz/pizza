var app = angular.module('myApp', ['ngRoute']);
app.config(
    function($scope){
        $scope.order = {
            pizza : [
                {topping: "pepperonit"},
                {topping: "green pepper"},
                {topping: "sausage"}
            ]
        }
    },

    function($routeProvider){
    $routeProvider 
    //routes
        .when('/', {
            templateUrl: 'pages/basics.html',
            controller: 'mainController',
          //  css: "../scss/main.css"
        })
        .when('/presets', {
            templateUrl: 'pages/presets.html',
            controller: 'presetsController',
           // css: "../scss/main.css"    
        })
        .when('/summary', {
            templateUrl: 'pages/summary.html',
            controller: 'summaryController',
           // css: "../scss/main.css"    
        })
});

app.controller('mainController', function($scope){
    $scope.title = "";
});
app.controller('summaryController', function($scope){
    $scope.title = "Summary";
});
