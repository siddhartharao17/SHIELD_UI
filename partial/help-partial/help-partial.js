angular.module('shield').controller('HelpPartialCtrl',function($scope){

 $scope.help = [
        {text: 'Config Trouble? ', answer: 'You can either call 1800-Shield-12 , email to support@shield.com or use chat icon on the dashboard for live support'},
        {text: 'Submit a Bug?', answer: 'All bug reports should be sent to bugs@shield.org'},
        {text: 'How to contact support ?', answer: 'You can either call 1800-Shield-12 , email to support@shield.com or use chat icon on the dashboard for live support'},
    ];

    $scope.openChat = function () {
        $uibModal.open({
            templateUrl: 'partial/chat-modal/chat-modal.html',
            controller: 'ChatModalCtrl'
        }).result.then(function(result){
            //do something with the result
        });
    };
});
