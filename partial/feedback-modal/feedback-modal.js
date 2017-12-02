angular.module('shield').controller('FeedbackModalCtrl',function($scope, ngToast){
    $scope.submit = function () {
        //$scope.dismiss();
        ngToast.create('Thank You for your Feedback!');
    };

});
