var app=angular.module('ngApp',["ngResource","ngRoute","tvshowfactory"]);
app.config(function($routeProvider){
    console.log("calling the controller");
    $routeProvider.when('/',{templateUrl:'favs.html'})
                  .when('/favs',{templateUrl:'favs.html',controller:'tvCtr'})
                  .when('/mein',{templateUrl:'mein.html',controller:'showCtr'})
                  .when('/show/:name',{templateUrl:'show.html',controller:'showTimeCtr'})
                  ;
    
    }
           );
    app.controller('tvCtr',function($scope,$http,$rootScope,tvshowfactory){
    $scope.search=function(){
    $http.get('http://api.tvmaze.com/singlesearch/shows?q='+$scope.xx).then(function(data){
    
        $scope.show=data;
        console.log($scope.xx);

    
    })
     }
    fav=new Array();
    $scope.add=function(x){
         
        console.log("before");
        console.log($scope.favs);
        if($scope.favs != undefined)
              fav=$scope.favs;            
         
            if(fav.indexOf(x)==-1)
             fav.push(x);
        
        $rootScope.fav=fav;
        $scope.favs=fav;
        
        console.log($scope.favs);
    
    }
    
    $scope.remove=function(x){
                itemPlace=$rootScope.fav.indexOf(x);
                $rootScope.fav.splice(itemPlace,1);
    
    }

    
        
            $scope.shows=tvshowfactory;
        //console.log(tvshowfactory);
         
    })
    
    app.controller('showCtr',function($scope,$http,$rootScope,$routeParams){
        if($rootScope.fav != undefined)
            $scope.favs=$rootScope.fav;
        else
            $scope.favs=[{name:"emptyyyy!!"}];
        
        
    })
    
    app.controller("showTimeCtr",function($http,$scope,$routeParams,$resource){
//    $http.get('http://api.tvmaze.com/singlesearch/shows?q='+$routeParams.name).then(function(result){
//    
//        $scope.show=result;
// 
//    
//    })
         var all=$resource('http://api.tvmaze.com/singlesearch/shows?q='+$routeParams.name);
        
    $scope.show=all.get();
    })



    
