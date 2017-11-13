angular.module('mainCtrl', [])

.controller('MainController', function($rootScope, $location, Auth){

    var vm = this;

    vm.loggedIn = Auth.isLoggedin();

    $rootScope.$on('$routeChangeStart', function(){

        vm.loggedIn = Auth.isLoggedin();

        Auth.getUser()
            .then(function(data) {
                vm.user = data.data;
            });
    });

    vm.doLogin = function(){
        debugger;
        vm.processing = true;
        vm.error = '';

        Auth.login(vm.loginData.username, vm.loginData.password)
            .then(function(data){

                vm.processing = false;

                Auth.getUser()
                .then(function(data) {
                    vm.user = data.data;
                });

                if(data.success)
                    $location.path('/');
                else
                    vm.error = data.message;

            });
    }

    vm.doLogout = function(){
        debugger;
        Auth.logout();
        $location.path('/login');
 
    }

})