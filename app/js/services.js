var services = angular.module('simServices', ['ngResource']);

services.factory("account", function($http, $q, $window) {
    var userInfo;

    /**
     * Cuando se recarga el navegador, solo si existe, se obtiene la 
     * información de usuario desde la sesión.
     */

    if ($window.sessionStorage["userInfo"]) {
        userInfo = JSON.parse($window.sessionStorage["userInfo"]);
    }
 
    /**
     * Código dummy para validar la funcionalidad de la interfaz.
     */

    function login(username, password) {
        var deferred = $q.defer();

        if (username == 'demo' && password == 'demo') {

            userInfo = {
                accessToken: 'd95FPPmCoM26mbL'
            };

            $window.sessionStorage["userInfo"] = JSON.stringify(userInfo);

            deferred.resolve(userInfo); 
        }
        else {

            deferred.reject("username doesn't exist");
        }

        return deferred.promise;
    }

    function logout() {
        var deferred = $q.defer();

        $window.sessionStorage["userInfo"] = null;
        userInfo = null;
        deferred.resolve({});
        console.log("logout")
        return deferred.promise;
    }

    function getUserInfo() {
        return userInfo;
    }

    return {
        login: login,
        logout: logout,
        getUserInfo: getUserInfo
    };
});