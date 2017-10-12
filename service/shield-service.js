angular.module('shield').factory('shieldService',function($http, $q, $cookies, urlService) {

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

    shieldService.getLogs = function () {
        var deferred = $q.defer();
        $http.get(urlService.dashLogUrl).
        success(function (data) {
//			    console.log("Sucess ");
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
//			    console.log("Sucess ");
            deferred.resolve(data);
        }).error(deferred.reject);
        return deferred.promise;
    };

    return shieldService;
});
