var app = angular.module('shield').controller('ChatModalCtrl',function($scope,$cookies,$location,$anchorScroll){

// set room as uid
// var myUList = [];
 var room = ''
 var username =  $cookies.get('username')
 console.log('username-----------'+username)
 //username
// $scope.room = room
 var socket = io.connect('http://127.0.0.1:5000',{'multiplex': false})

if(username != 'support')
{
  room =  $cookies.get('username')
  $scope.hideBasicInfo = false;
}
else
{

  room =  $cookies.get('username')
  $scope.hideBasicInfo = true;

}

  $scope.messages = [];
  $scope.name = '';
  $scope.text = '';
  $scope.userlist = [];

  socket.on('connect',function()
  {
        console.log('connected')
//        $scope.name = username;
        socket.emit('identify',username)


        socket.emit('join',{'room':room });
  });

 socket.on('userlist',function(user){

 console.log("a_________"+user.user)
 console.log("size "+user.length)

        $scope.userlist.push(user)
         $scope.$apply();

 });

var mymodel = $scope.mymod

console.log("mymodel"+mymodel)

  socket.on('message', function(msg){
    console.log('inside msg' +msg)
    $scope.messages.push(msg)
    $scope.$apply();
//    var elem = document.getElementById('msgpane')
//    elem.scrollTop = elem.scrollHeight;
  });

  $scope.send = function send(){

    console.log('this is the text goin there '+$scope.text)
    socket.emit('message', $scope.text);
    $scope.text = '';
     $scope.date = new Date();


  };


// $scope.gotoBottom = function() {
//      console.log('methos is calles-------------------------'+$scope.text)
//      $location.hash($scope.text);
//      $anchorScroll();
//    };

});
