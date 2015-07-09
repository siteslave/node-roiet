
// angular.module('name', [])

angular.module('app.controller.UsersCtrl', [
    'app.service.UserServ'
])
.controller('UsersCtrl', function ($scope, UserServ, LxNotificationService) {

    UserServ.getUsers()
        .then(function (rows) {
            // .. success
            $scope.users = rows;

        }, function (err) {
            // .. error
            console.log(err);
        });

        $scope.remove = function (idx, username) {
            // LxNotificationService.confirm
            // (title, message, {ok: 'xx', cancel: 'yyy'}, function (res) {})
            LxNotificationService.confirm('ยืนยันการลบ',
                'คุณต้องการลบรายการนี้ ['+ username +'] ใช่หรือไม่?',
                {ok: 'ตกลง', cancel: 'ยกเลิก'}, function (res) {
                    if (res) {
                        // Delete
                        UserServ.remove(username)
                            .then(function () {
                                $scope.users.splice(idx, 1);
                            }, function (err) {
                                alert('Error');
                                console.log(err);
                            })

                    }
                });
        }

    });