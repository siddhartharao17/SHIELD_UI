angular.module('shield').controller('LogsPartialCtrl',function($scope, shieldService){

    shieldService.getLogs().then(function (data) {
        //console.log(data);

        $scope.logsData = data.message;
    });

});
