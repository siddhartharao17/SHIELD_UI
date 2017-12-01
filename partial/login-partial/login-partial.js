angular.module('shield').controller('LoginPartialCtrl',function($scope, shieldService, $state, $cookies){

    $scope.login = function () {

        var dataToSend = JSON.stringify({
            'inputUsername': $scope.inputUname,
            'inputPassword': $scope.inputPassword
        });
        shieldService.login(dataToSend).then(function (data) {
            if(data){
                // $cookies.put('username', data.message);
                // console.log(data.message);
                $cookies.put('u_id', data.message.u_id);
                $cookies.put('username', data.message.username);
                $state.go('dashboard-partial');
            }
        });
    }
});
