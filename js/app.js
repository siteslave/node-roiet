
angular.module('app', [
    'lumx', 'ui.router',
    'app.controller.SettingsCtrl'
])
.config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'templates/main.html'
            })
            .state('users', {
                url: '/users',
                templateUrl: 'templates/users.html'
            })
            .state('settings', {
                url: '/settings',
                templateUrl: 'templates/settings.html',
                controller: 'SettingsCtrl'
            })
    });