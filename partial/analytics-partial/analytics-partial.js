angular.module('shield').controller('AnalyticsPartialCtrl',function($scope,shieldService){

var date_time_list = [];
var year = ["2017"];
var webData = '';
var labels = [];
var myMap = new Map();
myMap.set("Aug",   1);
myMap.set("Nov", 2);
var dict = {"Jan":0, "Feb":0, "Mar":0, "Apr":0, "May":0, "Jun":0, "Jul":0,"Aug":0,"Sep":0,"Oct":0,"Nov":0,"Dec":0};
var completeD = {"":dict};
shieldService.getWebCamData().then(function (data) {

        $scope.webCamData = data.message;
        webData =  $scope.webCamData ;
        for(i=0;i<webData.length;i++)
        {
            date_time_list.push(webData[i].webcam_date_time)
        }

        for(k=0;k<date_time_list.length;k++)
        {
            var temp = date_time_list[k];
            var yearselected = temp.slice(12,17);
            var monthselected = temp.slice(8,11);
            dict[monthselected] = dict[monthselected]+1;
        /*    completeD.yearselected = dict;*/
          }
console.log("complete dict printed below");
console.log(completeD);
$scope.year = ["2017", "2016", "2015"];

$scope.getValue = function (x) {
                var selYear = $scope.selectedName;
                console.log("year selected"+selYear)
              };


$scope.labels = Object.keys(dict);
$scope.series = ['Webcam Images'];
  $scope.data = [ Object.values(dict)];
  $scope.onClick = function (points, evt) {
    //console.log(points, evt);
  };
  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }];
  $scope.options = {
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        }

      ]
    }
  };

   });

});
