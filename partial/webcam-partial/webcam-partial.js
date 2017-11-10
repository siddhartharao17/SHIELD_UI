angular.module('shield').controller('WebcamPartialCtrl',function($scope,shieldService){

shieldService.getWebCamData().then(function (data) {
        //console.log(data);

        $scope.webCamData = data.message;
    });

$scope.getWebCamImage = function () {

    $scope.image_url = this.img.image_url;
     var dataToSend  = {
            image_url : $scope.image_url


        }
        console.log(dataToSend);
    shieldService.getWebCamImg(dataToSend).then(function (data) {

        console.log(data.message);
        $scope.webCamDataTemp = data.message;

    });
    }


});


