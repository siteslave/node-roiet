
angular.module('app.controller.SettingsCtrl', [])
.controller('SettingsCtrl', function ($scope) {

        var json = require('jsonfile');
        var gui = require('nw.gui');
        var path = require('path');
        var fs = require('fs');


        var configPath = path.join(gui.App.dataPath, 'config.json');

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