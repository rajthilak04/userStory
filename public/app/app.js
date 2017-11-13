angular.module("appStory", ['appRoute', 'mainCtrl', 'authService', 'userCtrl', 'userServices', 'storyCtrl', 'storyServices', 'reverseDirective'])

.config(function($httpProvider){

    $httpProvider.interceptors.push('AuthInterceptor');

});
