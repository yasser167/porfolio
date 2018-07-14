(function(){

}());

// angular.module("myModule", [])
//         .controller('MainController', MainController);

var app = angular.module("myModule");
//#region 

//$scope        : to controlll the view
//github is a deparate service
//$interval     : for timing
//$log          : to record log on the console
//$location     : identifies location of an html element
//$anchorScroll : to scroll to a specifice view

//#endregion

var MainController = function($scope, github, $interval, $log, $location, $anchorScroll){

    // var person = { firstName: "Yasser", lastName: "Zaky",
    //                imageSrc: "images/YasserZaky.jpg"
    // };

    
    $scope.userName = "";
    $scope.message = "Angular Practice w kedza";
    $scope.repoSortOrder = "-stargazers_count";
    $scope.countDown = 10;
    $scope.searchWarning = "Time to search: ";
    $scope.searchText = "Search Complete :D";
    startCountDown();

    app.controller("MainController", MainController);
};



