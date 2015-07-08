
angular.module('app.controller.SettingsCtrl', [])
.controller('SettingsCtrl', function ($scope, Config) {

        var json = require('jsonfile');
        var fs = require('fs');

        var configPath = Config.getConfigPath();

        fs.access(configPath, fs.R_OK && fs.W_OK, function (err) {
            if (err) {
                var defaultConfig = {
                    host: 'localhost',
                    database: 'host',
                    user: 'sa',
                    password: 'sa'
                };

                json.writeFileSync(configPath, defaultConfig);
                $scope.config = json.readFileSync(configPath);

            } else {
                $scope.config = json.readFileSync(configPath);
            }
        });

        $scope.save = function () {

            json.writeFileSync(configPath, $scope.config);

        }
    });