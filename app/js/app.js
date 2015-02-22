var app = angular.module('andoril', [
	'ngRoute',
 	'andorilControllers',
    'andorilServices'
]);

app.config(['$routeProvider', function($routeProvider) {

    var resolve = {
        auth: ["$q", "account", function($q, account) {
            var userInfo = account.getUserInfo();

            if (userInfo) {
                return $q.when(userInfo);
            } 
            else {
                return $q.reject({ authenticated: false });
            }
        }]
    }

    $routeProvider.
     	when('/', {
            templateUrl: 'partials/panel.html',
            controller: 'PanelCtrl',
            resolve: resolve
        }).
        when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'LoginCtrl'
        }).
        when('/recover', {
            templateUrl: 'partials/recover.html',
            controller: 'RecoverCtrl'
        }).
      	otherwise('/');
}]);

app.run(["$rootScope", "$location", function($rootScope, $location) {
  
    $rootScope.$on("$routeChangeError", function(event, current, previous, eventObj) {

        if (eventObj.authenticated === false) {
            $location.path("/login");
        }
    });
}]);