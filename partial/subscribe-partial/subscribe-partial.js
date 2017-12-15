angular.module('shield').controller('SubscribePartialCtrl',function($scope,shieldService,ngToast,$cookies){
shieldService.getProfile().then(function (data) {
        //console.log(data);

        $scope.scrCapData = data.message;
        var temp = data.message.subscribed_on;
        var dt = new Date(temp );
        var year = dt.getFullYear();
        dt.setYear(year+1)
        $scope.expiry = dt.toLocaleDateString("en-US");
    });

shieldService.getFeatures().then(function(data) {

    console.log(data.message)
    $scope.checkboxModel = {
       webcam : data.message[0].is_subscribed == 'true',
       scrnshot : data.message[1].is_subscribed == 'true',
       keylog : data.message[2].is_subscribed == 'true',
       remotelock : data.message[3].is_subscribed == 'true',
     };
});

 $scope.save = function () {
      //  ngToast.create('Subscription Updated!');
      if($scope.checkboxModel.remotelock == true && $scope.scrCapData.subscription_type == 'Basic')
        {
            ngToast.create('This feature is only available in Pro Subscription !');
        }
        else
        {
          var dataToSend  = {

             //u_id : $cookies.get('u_id'),
             features:[{feature_name : "Web Cam Capture",is_subscribed : String($scope.checkboxModel.webcam)},
                        {feature_name : "Key Log",is_subscribed :  String($scope.checkboxModel.scrnshot)},
                        {feature_name : "Screenshot",is_subscribed :  String($scope.checkboxModel.keylog)},
                        {feature_name : "Remote Lock",is_subscribed :  String($scope.checkboxModel.remotelock)},
                        ]
           }

           shieldService.updateFeature(dataToSend).then(function (data) {
            console.log(data);
            ngToast.create('Subscription Updated!');
        });
        }


    };

});
