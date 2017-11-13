angular.module('userCtrl', ['userServices'])

.controller('UserController', function(User){
    debugger;
    var vm = this;

    User.all()
        .then(function(successData){

            vm.users = successData.data;

        })


})

.controller('UserCreateController', function(User, $location, $window){

    var vm = this;
    
    vm.signupUser = function(){
        
        vm.message = '';

        User.create(vm.userData)
            .then(function(successData){

                vm.userData = {};
                vm.message = successData.data.message;

                $window.localStorage.setItem('token', successData.data.token);
                $location.path('/');

            })
    
    }
});