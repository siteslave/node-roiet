
angular.module('app.controller.SettingsCtrl', [
    'app.service.Encrypt'
])
.controller('SettingsCtrl', function ($scope, Config, Encrypt) {

        var json = require('jsonfile');
        var fs = require('fs');

        var configPath = Config.getConfigPath();

        fs.access(configPath, fs.R_OK && fs.W_OK, function (err) {
            if (err) {
                var defaultConfig = {
                    host: 'localhost',
                    database: 'host',
                    user: 'sa',
                    password: Encrypt.encrypt('sa')
                };

                json.writeFileSync(configPath, defaultConfig);

                $scope.config = json.readFileSync(configPath);
                $scope.config.password = 'sa';

            } else {
                $scope.config = json.readFileSync(configPath);
                $scope.config.password = Encrypt.decrypt($scope.config.password);
            }
        });

        $scope.save = function () {

            $scope.config.password = Encrypt.encrypt($scope.config.password);

            json.writeFileSync(configPath, $scope.config);

        }
    });