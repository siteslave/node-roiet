
angular.module('app', [
    'lumx', 'ui.router',
    'app.controller.SettingsCtrl',
    'app.service.Config',
    'app.controller.UsersCtrl',
    'app.controller.UserNewCtrl',
    'app.controller.UserEditCtrl'
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
                templateUrl: 'templates/users.html',
                controller: 'UsersCtrl'
            })
            .state('settings', {
                url: '/settings',
                templateUrl: 'templates/settings.html',
                controller: 'SettingsCtrl'
            })
            .state('new-user', {
                url: '/users-new',
                templateUrl: 'templates/user-new.html',
                controller: 'UserNewCtrl'
            })
            .state('user-edit', {
                url: '/user-edit/:username',
                templateUrl: 'templates/user-edit.html',
                controller: 'UserEditCtrl'
            })
    });