angular.module('shield').factory('urlService',function($cookies) {

    var baseUrl = 'http://localhost:5000';
    var urlService = {};

    urlService.loginUrl = baseUrl + '/api_login/';
    urlService.changePassUrl = baseUrl + '/change_pass';
    urlService.dashLogUrl = baseUrl + '/getKeylogData/' + $cookies.get('u_id');
  //  urlService.profileUrl = baseUrl + '/get_profile/' + $cookies.get('u_id');
    urlService.loginUrl = baseUrl + '/api_login';
   // urlService.dashLogUrl = baseUrl + '/getKeylogData/' + $cookies.get('u_id');
    urlService.profileUrl = baseUrl + '/get_profile';//+ $cookies.get('u_id');
    urlService.createUpdateProfileUrl = baseUrl + '/create_update_profile';
    urlService.createUpdatePaymentsUrl = baseUrl + '/create_update_payments';
    urlService.paymentUrl = baseUrl + '/get_payments';
    urlService.webCamUrl = baseUrl + '/getWebCamData/' + $cookies.get('u_id');
    urlService.webCamImageUrl = baseUrl + '/getWebCamImages';
    urlService.screenCaptUrl = baseUrl + '/getScrCapData/' + $cookies.get('u_id');
    urlService.screenCapImgUrl = baseUrl + '/getScrCapImages';
    urlService.featureUrl = baseUrl + '/get_features';
    urlService.updateFeatureUrl = baseUrl + '/update_features';
    return urlService;
});
