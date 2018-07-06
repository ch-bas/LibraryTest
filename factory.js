var tvshowfactory= angular.module("tvshowfactory",[]);

tvshowfactory.factory('tvshowfactory',function($resource)
                      {
    console.log("calling the factory");
    var allfbs=$resource('http://api.tvmaze.com/shows');
    return allfbs.query();

}
                     
                     )