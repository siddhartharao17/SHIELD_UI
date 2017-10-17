angular.module('shield').controller('DashboardPartialCtrl',function($scope, shieldService, $uibModal){

    shieldService.getLogs().then(function (data) {
        //console.log(data);

        $scope.logsData = data.message;
    });

    shieldService.getProfile().then(function (data) {
        // console.log(data);
        $scope.profileData = data.message;
    });


    $scope.openChat = function () {

        $uibModal.open({
            templateUrl: 'partial/chat-modal/chat-modal.html',
            controller: 'ChatModalCtrl'
        }).result.then(function(result){
            //do something with the result
        });
    }

    $scope.openProfile = function () {

        $uibModal.open({
            templateUrl: 'partial/profile-modal/profile-modal.html',
            controller: 'ProfileModalCtrl'
        }).result.then(function(result){
            //do something with the result
        });
    }
});
