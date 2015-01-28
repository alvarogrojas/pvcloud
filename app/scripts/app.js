'use strict';

/**
 * @ngdoc overview
 * @name pvcloudApp
 * @description
 * # pvcloudApp
 *
 * Main module of the application.
 */
angular
        .module('pvcloudApp', [
            'ngAnimate',
            'ngCookies',
            'ngResource',
            'ngRoute',
            'ngSanitize',
            'ngTouch'
        ])
        .config(function ($routeProvider) {
            $routeProvider
                    .when('/', {
                        templateUrl: 'views/main.html',
                        controller: 'MainCtrl'
                    })
                    .when('/about', {
                        templateUrl: 'views/about.html',
                        controller: 'AboutCtrl'
                    })
                    .when('/mycloud/:section/:article_id', {
                        templateUrl: 'views/mycloud.html',
                        controller: 'MyCloudCtrl'
                    })
                    .when('/mycloud/:section', {
                        templateUrl: 'views/mycloud.html',
                        controller: 'MyCloudCtrl'
                    })
                    .when('/mycloud', {
                        templateUrl: 'views/mycloud.html',
                        controller: 'MyCloudCtrl'
                    })
                    .when('/mycloud_login/:email/:account_id/:token', {
                        templateUrl: 'views/mycloud_login.html',
                        controller: 'MyCloud_LoginCtrl'
                    })
                    .when('/mycloud_login', {
                        templateUrl: 'views/mycloud_login.html',
                        controller: 'MyCloud_LoginCtrl'
                    })
                    .when('/contact', {
                        templateUrl: 'views/contact.html',
                        controller: 'ContactCtrl'
                    })
                    .when('/account_add_complete', {
                        templateUrl: 'views/account_add_complete.html',
                        controller: 'AccountAddCompleteCtrl'
                    })
                    .when('/mycloud_home', {
                        templateUrl: 'views/mycloud_home.html',
                        controller: 'MycloudHomeCtrl'
                    })
                    .when('/passwordrecovery/:account_id/:confirmation_code', {
                        templateUrl: 'views/passwordrecovery.html',
                        controller: 'PasswordrecoveryCtrl'
                    })
                    .when('/prs', {
                        templateUrl: 'views/passwordrecoverysuccess.html'
                    })
                    .when('/err', {
                        templateUrl: 'views/error.html'
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
        });
