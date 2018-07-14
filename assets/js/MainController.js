
var app = angular.module("myModule");
//#region Services Definitions 

//$scope        : to controlll the view
//github is a deparate service
//$interval     : for timing
//$log          : to record log on the console
//$location     : identifies location of an html element
//$anchorScroll : to scroll to a specifice view

//#endregion

var MainController = function($scope, $log, $interval, $location){

    $scope.hideIconHome = false;
    $scope.hideNavHome = true;

    //  $scope.homeOn = function(){

    //     $scope.hideIconHome = true;
    //     $scope.hideNavHome = false;
    //     document.getElementById('spanHOME').style.color = 'red';
    // }

    // $scope.homeOut = function(){

    //     $scope.hideIconHome = false;
    //     $scope.hideNavHome = true;
    // }




    app.controller("MainController", MainController);
};