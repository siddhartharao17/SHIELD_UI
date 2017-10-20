angular.module('shield').controller('ChangePassModalCtrl',function($scope, shieldService, $cookies, ngToast){

    $scope.changePass = function () {
        if($scope.old_pass && $scope.old_pass.length  > 0 && $scope.new_pass && $scope.new_pass.length  > 0){
            var dataTosend = {
                "u_id" :   $cookies.get('u_id'),
                "old_pass" : $scope.old_pass,
                "new_pass" : $scope.new_pass
            };
            shieldService.changePass(dataTosend).then(function (data) {
                if(data.message){
                    console.log(data.message);
                    ngToast.create(data.message);
                }
            });
            ngToast.create('Your Password Has Been Updated!!');
        }

    };
});
