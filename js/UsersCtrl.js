
// angular.module('name', [])

angular.module('app.controller.UsersCtrl', [
    'app.service.UserServ'
])
.controller('UsersCtrl', function ($scope, UserServ) {

    UserServ.getUsers()
        .then(function (rows) {
            // .. success
            $scope.users = rows;

        }, function (err) {
            // .. error
            console.log(err);
        })

    });