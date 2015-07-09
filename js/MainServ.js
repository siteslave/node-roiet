// Main Service

angular.module('app.service.MainServ', [])
.factory('MainServ', function ($q, Config) {

        var db = Config.getConnection(); // knexjs

        return {
            getService: function (startDate, endDate) {

                var q = $q.defer();
                /*
                 select o.hn, o.vstdate, p.pname, p.fname, p.lname
                 from ovst as o
                 inner join patient as p on p.hn=o.hn
                 where o.vstdate between '2015-01-01' and '2015-01-10'
                 */
                var sql = 'select o.hn, o.vstdate, p.pname, p.fname, p.lname ' +
                    'from ovst as o inner join patient as p on p.hn=o.hn ' +
                    'where o.vstdate between ? and ?';

                db.raw(sql, [startDate, endDate])
                    .then(function (rows) {
                        // success
                        q.resolve(rows[0]);
                    })
                    .catch(function (err) {
                        // error
                        q.reject(err);
                    });

                return q.promise;

            }
        }

    })