angular.module('shield').factory('shieldService',function($http, $q, $cookies, ngToast, urlService) {

    var shieldService = {};

    shieldService.login = function ($params) {
        var deferred = $q.defer();
        $http.post(urlService.loginUrl, $params).
            success(function (data) {
//			    console.log("Sucess ");
                deferred.resolve(data);
        }).error(deferred.reject);

        return deferred.promise;
    };

    shieldService.changePass = function ($params) {
        var deferred = $q.defer();
        $http.post(urlService.changePassUrl, $params).
        success(function (data) {
//			console.log("Sucess ");
            deferred.resolve(data);
        }).error(deferred.reject);

        return deferred.promise;
    };

    shieldService.getLogs = function () {
        var deferred = $q.defer();
        $http.get(urlService.dashLogUrl).
        success(function (data) {
            console.log(data.message);
            deferred.resolve(data);
        }).error(deferred.reject);
        return deferred.promise;
    };


    shieldService.getProfile = function () {
        var deferred = $q.defer();
        var dataTosend = {u_id : $cookies.get('u_id')};
        $http.post(urlService.profileUrl, dataTosend).
        success(function (data) {
//			    console.log("Sucess ");
            deferred.resolve(data);
        }).error(deferred.reject);
        return deferred.promise;
    };

    shieldService.createUpdateProfile = function (dataToSend) {
        var deferred = $q.defer();
        $http.post(urlService.createUpdateProfileUrl, dataToSend).
        success(function (data) {
            deferred.resolve(data);
        }).error(deferred.reject);
        return deferred.promise;
    };
    shieldService.createUpdatePayments = function (dataToSend) {
        var deferred = $q.defer();
        $http.post(urlService.createUpdatePaymentsUrl, dataToSend).
        success(function (data) {
            deferred.resolve(data);
        }).error(deferred.reject);
        return deferred.promise;
    };
     shieldService.getPayments = function () {
        var deferred = $q.defer();
        var dataTosend = {u_id : $cookies.get('u_id')};
        $http.post(urlService.paymentUrl, dataTosend).
        success(function (data) {
//			    console.log("Sucess ");
            deferred.resolve(data);
        }).error(deferred.reject);
        return deferred.promise;
    };

     shieldService.getWebCamData = function () {
        var deferred = $q.defer();
        $http.get(urlService.webCamUrl).
        success(function (data) {
            console.log(data.message);
            deferred.resolve(data);
        }).error(deferred.reject);
        return deferred.promise;
    };

    shieldService.getWebCamImg = function (dataToSend) {
       var deferred = $q.defer();
        $http.post(urlService.webCamImageUrl, dataToSend).
        success(function (data) {
//			    console.log("Sucess ");
            deferred.resolve(data);
        }).error(deferred.reject);
        return deferred.promise;
    };

    return shieldService;
});
