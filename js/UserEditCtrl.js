// Controller
angular.module('app.controller.UserEditCtrl', [])

.controller('UserEditCtrl', function ($scope, $state, $stateParams, UserEditServ) {
        // #/user-edit/test
        UserEditServ.getDetail($stateParams.username)
            .then(function (user) { // user == rows[0]

                // Success
                $scope.username = user.user_name;

            }, function (err) {
                // Error
                alert('Error');
                console.log(err);
            })

        $scope.save = function () {

            if (!$scope.password) {
                alert('กรุณาระบุรหัสผ่าน');
            } else {
                // Update

                var crypto = require('crypto');
                var cryptPass = crypto.createHash('md5')
                    .update($scope.password)
                    .digest('hex');

                UserEditServ.save($stateParams.username, cryptPass)
                    .then(function () {
                        alert('Success');
                        // Redirect to #/users
                        $state.go('users');
                    }, function (err) {
                        console.log(err);
                        alert('Error');
                    })
            }
        }

    });