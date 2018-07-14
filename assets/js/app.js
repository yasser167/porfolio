(function(){

    var app = angular.module("myModule", ["ngRoute"]);
    
    app.config(function($routeProvider){

        $routeProvider
            .when("/main", {
                templateUrl: "main.html",
                controller:  "MainController"
            })
            .otherwise({redirectTo: "/main"});

    });

}());