angular.module('storyCtrl', ['userServices'])

.controller('StoryController', function(Story, socketio){
    debugger;
    var vm = this;

    Story.all()
        .then(function(successData){

            vm.stories = successData.data;

        })

    vm.createStory = function(){
        
        vm.message = '';

        Story.create(vm.storyData)
            .then(function(successData){

                vm.storyData = {};
                vm.message = successData.data.message;
                

            })
    
    }

    socketio.on('story', function(data){
        vm.stories.push(data)
    })


})

.controller('AllStoriesController', function(stories, socketio){
    debugger;
    var vm = this;
    vm.stories = stories.data;
    socketio.on('story', function(data){
        vm.stories.push(data)
    })
})