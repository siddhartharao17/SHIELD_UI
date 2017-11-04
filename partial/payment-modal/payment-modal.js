angular.module('shield').controller
  ( 'PaymentModalCtrl'
  , function($scope, $locale,$cookies, shieldService, ngToast) {
      $scope.currentYear = new Date().getFullYear()
      $scope.currentMonth = new Date().getMonth() + 1
      $scope.months = $locale.DATETIME_FORMATS.MONTH
      $scope.ccinfo = {type:undefined}

       shieldService.getPayments().then(function (data) {
        if(data.message != "Error"){

            $scope.ccinfo.cc_number = data.message.cc_number;
            $scope.ccinfo.cc_type = data.message.cc_type;
            $scope.ccinfo.cc_name = data.message.cc_name;
            $scope.ccinfo.month = data.message.cc_exdate.substring(0,data.message.cc_exdate.indexOf('/'));
            $scope.ccinfo.year = data.message.cc_exdate.substring(data.message.cc_exdate.indexOf('/')+1);
            $scope.ccinfo.classname =  data.message.cc_type ? 'fa fa-cc-mastercard'
                : data.message.cc_type ? 'fa fa-cc-visa'
                : data.message.cc_type ? 'fa fa-cc-amex'
                : data.message.cc_type ? 'fa fa-cc-discover'
                : 'na'

             }
    });

      $scope.save = function(data){
        if ($scope.paymentForm.$valid){
        $scope.ccinfo.bval = 'true'
       // console.log(data)
           // send json data
         var dataToSend  = {
            u_id : $cookies.get('u_id'),
            cc_number : $scope.ccinfo.cc_number,
            cc_type : $scope.ccinfo.cc_type,
            security_code : $scope.ccinfo.security_code,
            cc_name : $scope.ccinfo.cc_name,
            cc_exdate : $scope.ccinfo.cc_exdate,
        }

        shieldService.createUpdatePayments(dataToSend).then(function (data) {
            console.log(data);
            ngToast.create('Payment Information Has Been Updated!');
        });
        }
      }
    }
  )
angular.module('shield').directive
  ( 'creditCardType'
  , function(){
      var directive =
        { require: 'ngModel'
        , link: function(scope, elm, attrs, ctrl){
            ctrl.$parsers.unshift(function(value){
              scope.ccinfo.classname =
                (/^5[1-5]/.test(value)) ? 'fa fa-cc-mastercard'
                : (/^4/.test(value)) ? 'fa fa-cc-visa'
                : (/^3[47]/.test(value)) ? 'fa fa-cc-amex'
                : (/^6011|65|64[4-9]|622(1(2[6-9]|[3-9]\d)|[2-8]\d{2}|9([01]\d|2[0-5]))/.test(value)) ? 'fa fa-cc-discover'
                : undefined
              ctrl.$setValidity('invalid',!!scope.ccinfo.classname)


              return value
            })
          }
        }
      return directive
      }
    )
 angular.module('shield').directive
  ( 'creditCardType'
  , function(){
      var directive =
        { require: 'ngModel'
        , link: function(scope, elm, attrs, ctrl){
            ctrl.$parsers.unshift(function(value){
              scope.ccinfo.cc_type =
                (/^5[1-5]/.test(value)) ? 'mastercard'
                : (/^4/.test(value)) ? 'visa'
                : (/^3[47]/.test(value)) ? 'amex'
                : (/^6011|65|64[4-9]|622(1(2[6-9]|[3-9]\d)|[2-8]\d{2}|9([01]\d|2[0-5]))/.test(value)) ? 'discover'
                : undefined
              ctrl.$setValidity('invalid',!!scope.ccinfo.cc_type)


              return value
            })
          }
        }
      return directive
      }
    )
angular.module('shield').directive
  ( 'cardExpiration'
  , function(){

      var directive =
        { require: 'ngModel'
        , link: function(scope, elm, attrs, ctrl){
            scope.$watch('[ccinfo.month,ccinfo.year]',function(value){
              ctrl.$setValidity('invalid',true)
              if ( scope.ccinfo.year == scope.currentYear && scope.ccinfo.month <= scope.currentMonth )
              {
                ctrl.$setValidity('invalid',false)
              }
              if ( scope.ccinfo.month >12 || scope.ccinfo.month ==0)
              {
                ctrl.$setValidity('invalid',false)
              }
              if ( (scope.ccinfo.year < scope.currentYear && scope.ccinfo.month <= scope.currentMonth )||
                  scope.ccinfo.year>scope.currentYear +300)
              {
                ctrl.$setValidity('invalid',false)
              }
              else
              {
               scope.ccinfo.cc_exdate = scope.ccinfo.month +'/'+scope.ccinfo.year
              }
              return value
            },true)
          }
        }

      return directive
      }
    )

angular.module('shield').filter
  ( 'range'
  , function() {
      var filter =
        function(arr, lower, upper) {
          for (var i = lower; i <= upper; i++) arr.push(i)
          return arr
        }
      return filter
    }
  )
