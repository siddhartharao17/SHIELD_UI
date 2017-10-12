angular.module('shield').controller('ProfileModalCtrl',function($scope, $cookies, shieldService){

    shieldService.getProfile().then(function (data) {
        if(data){
            // $cookies.put('username', data.message);
             console.log(data);
           // $cookies.put('u_id', data.message.u_id);
            //$state.go('dashboard-partial');
            $scope.first_name = data.message.first_name;
            $scope.last_name = data.message.last_name;
            $scope.address = data.message.address;
            $scope.street = data.message.street;
            $scope.state = data.message.state;
            $scope.country = data.message.country;
            $scope.zip = data.message.zip;
            $scope.username = data.message.username;
        }
    });

    $scope.save = function () {
        var dataToSend  = {
            first_name : $scope.first_name,
            last_name : $scope.last_name,
            address : $scope.address,
            street : $scope.street,
            state : $scope.state,
            country : $scope.country,
            zip : $scope.zip,
            username : $scope.username,
            u_id : $cookies.get('u_id')
        }

        shieldService.createUpdateProfile(dataToSend).then(function (data) {
            console.log(data);
        });
    };


});
