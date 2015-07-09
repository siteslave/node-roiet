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
            },

            save: function (username, password) {
                var q = $q.defer();
                // UPDATE web_user SET user_password=password
                // WHERE user_name=username
                db('web_user')
                    .update({
                        user_password: password
                    })
                    .where('user_name', username)
                    .then(function () {
                        q.resolve();
                    })
                    .catch(function (err) {
                        q.reject(err);
                    });

                return q.promise;
            }
        }
    });