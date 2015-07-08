angular.module('app.service.UserServ', [])
    .factory('UserServ', function ($q, Config) {
        return {
            getUsers: function () {
                var q = $q.defer();
                var db = Config.getConnection();

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

            save: function (data) {
                //.. sql

            },

            remove: function (id) {
                // .. sql
            }
        }
    });
