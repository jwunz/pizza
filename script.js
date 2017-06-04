var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider 
    //routes
        .when('/', {
            templateUrl: 'pages/toppings.html',
            controller: 'mainController',
          //  css: "../scss/main.css"
        })
        .when('/presets', {
            templateUrl: 'pages/toppings.html',
            controller: 'mainController',
           // css: "../scss/main.css"    
        })
});

app.controller('mainController', function($scope){
});