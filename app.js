angular.module('shield', ['ngAnimate', 'ngToast', 'ui.bootstrap','ui.router','ngAnimate', 'ngCookies']);

angular.module('shield').config(function($stateProvider, $urlRouterProvider) {

var allowedOrigins = "http://localhost:5000";
var client = io('http://127.0.0.1:5000/stomp', {
    origins: allowedOrigins
});
    $stateProvider.state('login-partial', {
        url: '/login',
        templateUrl: 'partial/login-partial/login-partial.html'
    });
    $stateProvider.state('dashboard-partial', {
        url: '/dashboard',
        templateUrl: 'partial/dashboard-partial/dashboard-partial.html'
    }).state('dashboard-partial.logs', {
        url: '/logs',
        templateUrl: 'partial/logs-partial/logs-partial.html'
    }).state('dashboard-partial.webcam', {
        url: '/webcam',
        templateUrl: 'partial/webcam-partial/webcam-partial.html'
    }).state('dashboard-partial.scrshot', {
        url: '/scrshot',
        templateUrl: 'partial/screenshot-partial/screenshot-partial.html'
    });
    $stateProvider.state('faq-partial', {
        url: '/faq',
        templateUrl: 'partial/faq-partial/faq-partial.html'
    });
    $stateProvider.state('payment-modal', {
        url: '/partial/',
        templateUrl: 'partial/payment-modal/payment-modal.html'
    });

    $stateProvider.state('invoice-modal', {
        url: '/invoice-modal',
        templateUrl: 'partial/invoice-modal/invoice-modal.html'
    });

    // $stateProvider.state("webcam", {
    //     views: {
    //         "webcam": {
    //             template: "<h1>HELLO!</h1>"
    //         }
    //     }
    // })
    $stateProvider.state('screenshot-partial', {
        url: '/partial',
        templateUrl: 'partial/screenshot-partial/screenshot-partial.html'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');

});

angular.module('shield').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});

