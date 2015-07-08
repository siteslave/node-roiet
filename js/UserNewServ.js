angular.module('app.service.UserNewServ', [])
.factory('UserNewServ', function ($q, Config) {

        var db = Config.getConnection();

        return {
            save: function (username, password) {
                var crypto = require('crypto');
                var cryptPass = crypto.createHash('md5')
                    .update(password)
                    .digest('hex');

                var q = $q.defer();

                db('web_user')
                    .insert({
                        user_name: username,
                        user_password: cryptPass
                    })
                    .then(function () {
                        // success
                        q.resolve();
                    })
                    .catch(function (err) {
                        // error
                        q.reject(err);
                    });

                return q.promise;
            }
        }

    })