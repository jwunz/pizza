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

function radioclicked(radioid, radioimageid, imagesrc){
    turnoffradio();
    if (document.getElementById(radioid).checked) 
        {
            document.getElementById(radioimageid).src = imagesrc + "filled.png";
        }
}

function turnoffradio(){
    document.getElementById("radio1image").src = "../images/radioleft.png";
    document.getElementById("radio2image").src = "../images/radioboth.png";
    document.getElementById("radio3image").src = "../images/radioright.png";
}

function toggleExtras(){
    if(document.getElementById('extras').checked){
       document.getElementById('extrasImage').src = "../images/extrasfilled.png"
    }else{
       document.getElementById('extrasImage').src = "../images/extras.png" 
    }
}