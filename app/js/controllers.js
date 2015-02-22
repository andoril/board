var controllers = angular.module('controllers', []);

controllers.controller('LoginCtrl', ['$scope', 'account', function ($scope, account) {
    
    $scope.login = function(username, password) {
        account.login(username, password);
    }
}]);

controllers.controller('RecoverCtrl', ['$scope', 'account', function ($scope, account) {
    
    $scope.recover = function(email) {
        account.recover(email);
    }
}]);

controllers.controller('PanelCtrl', ['$scope', 'account', function ($scope, account) {

}]);

