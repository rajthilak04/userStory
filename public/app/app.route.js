angular.module('appRoute', ['ngRoute'])

.config(function($routeProvider, $locationProvider){
    debugger;
    $routeProvider.when('/', {
        templateUrl: 'app/views/pages/home.html',
        controller: 'MainController',
        controllerAs: 'main'
    })
    .when('/signup', {
        templateUrl: 'app/views/pages/signup.html'
    })
    .when('/login', {
        templateUrl: 'app/views/pages/login.html'
    })
    .when('/allStories', {
        templateUrl: 'app/views/pages/allStories.html',
        controller: 'AllStoriesController',
        controllerAs: 'story',
        resolve: {
            stories: function(Story){
                return Story.allStoreis()
            }
        }
    })

    $locationProvider.html5Mode(true);

});