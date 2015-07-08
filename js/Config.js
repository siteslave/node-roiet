
angular.module('app.service.Config', [])
.factory('Config', function () {

        var gui = require('nw.gui');

        var path = require('path');
        var fs = require('fs');

        var json = require('jsonfile');

        var configPath = path.join(gui.App.dataPath, 'config.json');

        return {
            getConnection: function () {
                var config = json.readFileSync(configPath);
                return require('knex')({
                    client: 'mysql',
                    connection: {
                        host: config.host,
                        database: config.database,
                        user: config.user,
                        password: config.password
                    },
                    pool: {
                        min: 5,
                        max: 100
                    }
                })
            },
            getConfigPath: function () {
                return configPath;
            }
        }

    });