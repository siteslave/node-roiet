angular.module('app.controller.UserNewCtrl', [
    'app.service.UserNewServ'
])
.controller('UserNewCtrl', function ($scope, $state, UserNewServ) {

        $scope.save = function () {
            if (!$scope.username) {
                alert('กรุณาระบุชื่อผู้ใช้งาน');
            } else if (!$scope.password) {
                alert('กรุณาระบุรหัสผ่าน');
            } else {

                // save
                UserNewServ.save($scope.username, $scope.password)
                    .then(function () {
                        // success
                        alert('Success');
                        $state.go('users');

                    }, function (err) {
                        alert('Error');
                        console.log(err);
                    })

            }
        }

    });
