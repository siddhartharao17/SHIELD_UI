angular.module('shield').controller('DashboardPartialCtrl',function($scope, shieldService, $uibModal, $state){
    $state.go("dashboard-partial.statistics");

    $scope.openLogs = function () {
        $state.go("dashboard-partial.logs");
    };

    $scope.openWebcam = function () {
        $state.go("dashboard-partial.webcam");
    };
    $scope.openScrShot = function () {
        $state.go("dashboard-partial.scrshot");
    };
     $scope.openStat = function () {
        $state.go("dashboard-partial.statistics");
    };
     $scope.getHelp = function () {
        $state.go("dashboard-partial.getHelp");
    };
    $scope.displayFaqs = function () {
        $state.go("dashboard-partial.faq");
    };
    $scope.openSubs = function () {
        $state.go("dashboard-partial.subsc");
    };
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
    };

    $scope.openProfile = function () {
        $uibModal.open({
            templateUrl: 'partial/profile-modal/profile-modal.html',
            controller: 'ProfileModalCtrl'
        }).result.then(function(result){
            //do something with the result
        });
    };

     $scope.changePassword = function () {
         $uibModal.open({
             templateUrl: 'partial/change-pass-modal/change-pass-modal.html',
             controller: 'ChangePassModalCtrl'
         }).result.then(function(result){
             //do something with the result
         });
     };
      $scope.openPayments = function () {
        $uibModal.open({
            templateUrl: 'partial/payment-modal/payment-modal.html',
            controller: 'PaymentModalCtrl'
        }).result.then(function(result){
            //do something with the result
        });
    };

    $scope.displayFeedbackForm = function () {
        $uibModal.open({
            templateUrl: 'partial/feedback-modal/feedback-modal.html',
            controller: 'FeedbackModalCtrl'
        }).result.then(function(result){
            //do something with the result
        });
    };
});
