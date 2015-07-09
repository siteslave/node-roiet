// Service

angular.module('app.service.UserEditServ', [])

.factory('UserEditServ', function ($q, Config) {

        var db = Config.getConnection(); // knexjs

        return {
            getDetail: function (username) {
                var q = $q.defer();
                // SQL builder
                db.select('*')
                    .from('web_user')
                    .where('user_name', username)
                    .limit(1)
                    .then(function (rows) {
                        q.resolve(rows[0]);
                    })
                    .catch(function (err) {
                        q.reject(err);
                    });

                return q.promise;
            }
        }
    });