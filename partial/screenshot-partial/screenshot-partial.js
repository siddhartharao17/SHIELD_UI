angular.module('shield').controller('ScreenshotPartialCtrl',function($scope,shieldService){

shieldService.getScrCapData().then(function (data) {
        //console.log(data);

        $scope.scrCapData = data.message;
    });

$scope.getScrCapImg = function () {

    $scope.image_url = this.img.image_url;
     var dataToSend  = {
            image_url : $scope.image_url


        }
        console.log(dataToSend);
        shieldService.getScrCapImg(dataToSend).then(function (data) {
//        console.log(data.message);
        $scope.scrCapDataTemp = data.message;

    });
    }


});
