angular.module('shield').controller('DashboardPartialCtrl',function($scope, shieldService, $uibModal){

    shieldService.getLogs().then(function (data) {
        //console.log(data);

        $scope.logsData = data;
    });

    shieldService.getProfile().then(function (data) {
        console.log(data);
    });


    $scope.openChat = function () {

        $uibModal.open({
            templateUrl: 'partial/chat-modal/chat-modal.html',
            controller: 'ChatModalCtrl'
        }).result.then(function(result){
            //do something with the result
        });
    }
});
