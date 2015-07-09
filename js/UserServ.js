angular.module('app.service.UserServ', [])
    .factory('UserServ', function ($q, Config) {

        var db = Config.getConnection();

        return {

            getUsers: function () {
                var q = $q.defer();
                db.select('user_name', 'user_password')
                    .from('web_user')
                    .then(function (rows) {
                        q.resolve(rows);
                    })
                    .catch(function (err) {
                        q.reject(err);
                    });

                return q.promise;

            },

            remove: function (username) {
                var q = $q.defer();
                db('web_user')
                    .where('user_name', username)
                    .del()
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
