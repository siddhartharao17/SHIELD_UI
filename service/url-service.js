angular.module('shield').factory('urlService',function($cookies) {

    var baseUrl = 'http://localhost:5000';
    var urlService = {};

    urlService.loginUrl = baseUrl + '/api_login/';
    urlService.dashLogUrl = baseUrl + '/getKeylogData/' + $cookies.get('u_id');
    urlService.profileUrl = baseUrl + '/get_profile/' + $cookies.get('u_id');
    urlService.deleteUser = baseUrl + '/delete_profile';
    return urlService;
});
