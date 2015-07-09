// Controller
angular.module('app.controller.UserEditCtrl', [])

.controller('UserEditCtrl', function ($scope, $stateParams, UserEditServ) {
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

    });