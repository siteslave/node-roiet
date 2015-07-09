// Main controller

angular.module('app.controller.MainCtrl', [])
.controller('MainCtrl', function ($scope, MainServ) {

        var moment = require('moment');

        $scope.show = function () {
            var startDate = moment($scope.startDate).format('YYYY-MM-DD');
            var endDate = moment($scope.endDate).format('YYYY-MM-DD');

            MainServ.getService2(startDate, endDate)
                .then(function (rows) {
                    $scope.patient = rows;
                }, function (err) {

                })
        }

    })