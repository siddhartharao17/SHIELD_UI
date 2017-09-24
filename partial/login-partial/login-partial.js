angular.module('shield').controller('LoginPartialCtrl',function($scope, shieldService, $state, $cookies){

    $scope.login = function () {

        var dataToSend = JSON.stringify({
            'inputUsername': $scope.inputUname,
            'inputPassword': $scope.inputPassword
        });
        shieldService.login(dataToSend).then(function (data) {
            if(data){
                $cookies.put('username', data.username);
                $cookies.put('u_id', data.u_id);
                $state.go('dashboard-partial');
            }
        });
    }
});
