'use strict';

var mainApp = angular.module('demo',
    ['ngRoute',
    'angoose.client',
    'angoose.ui',
    'ui.bootstrap',
    "ui.bootstrap.tpls",
    'angular-redactor',
    'ngSanitize',
    'xeditable',
    'angularjs-dropdown-multiselect']
)
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        $routeProvider.when("/login", {templateUrl: '/templates/login.tpl'});
        $routeProvider.when('/home', {templateUrl: 'templates/home.tpl'});
        $routeProvider.when("/todomvc", {templateUrl: '/templates/todo.tpl'});
        $routeProvider.when('/planillaSalPendA', {templateUrl: '/templates/planillaSalPendA.tpl'});
        $routeProvider.when('/planillaDiaAl', {
            templateUrl: '/templates/planillaDiaAl.tpl',
            controller: 'planillaDiaAlCAlCtrl'
        });
        $routeProvider.when('/nuevaPlanillaAl', {
            templateUrl: '/templates/nuevaPlanillaAl.html',
            controller: 'nuevaPlanillaAlCtrl',
        });
        $routeProvider.when('/reporteProductoGral', {
            templateUrl: '/templates/reporteProdGral.html',
            controller: 'reporteProductoGralCtrl',
        });
        $routeProvider.when('/reporteProductoExistAl', {
            templateUrl: '/templates/reporteProdAl.html',
            controller: 'reporteProductoExistAlCtrl',
        });
        $routeProvider.when('/listaEmpleado', {
            templateUrl: '/templates/listaEmp.html',
            controller: 'listaEmpleadoCtrl',
        });
        $routeProvider.when('/nuevoEmpleado', {
            templateUrl: '/templates/nuevoEmp.html',
            controller: 'nuevoEmpleadoCtrl',
        });
        $routeProvider.when('/listaUser', {
            templateUrl: '/templates/listaUser.html',
            controller: 'listaUserCtrl',
        });
        $routeProvider.when('/nuevoUser', {
            templateUrl: '/templates/nuevoUser.html',
            controller: 'nuevoUserCtrl',
        });
        $routeProvider.when('/planillaSalA', {
            templateUrl: 'pages/administrador/planillaSalA.html',
            controller: 'planillaSalACtrl',
        });
        $routeProvider.when('/planillaLiqPend', {
            templateUrl: '/templates/planillaLiqPend.html',
            controller: 'planillaLiqPendCtrl',
        });
        $routeProvider.when('/planillaLiq', {
            templateUrl: '/templates/planillaLiq.html',
            controller: 'planillaLiqCtrl',
        });
        $routeProvider.when('/reporteLiqFecha', {
            templateUrl: '/templates/reporteLiqF.html',
            controller: 'reporteLiqFCtrl',
        });
        $routeProvider.when('/reporteLiqEmp', {
            templateUrl: '/templates/reporteLiqEmp.html',
            controller: 'reporteLiqEmpCtrl',
        });
        $routeProvider.when('/reporteSalProdF', {
            templateUrl: '/templates/reporteSalProdF.html',
            controller: 'reporteSalProdFCtrl',
        });
        $routeProvider.when('/reporteSalProdE', {
            templateUrl: '/templates/reporteSalProdE.html',
            controller: 'reporteSalProdECtrl',
        });
        $routeProvider.when('/listaEmpAd', {
            templateUrl: '/templates/listaEmpAd.html',
            controller: 'listaEmpAdCtrl',
        });
        $routeProvider.when('/listaCarro', {
            templateUrl: '/templates/listaCarro.html',
            controller: 'listaCarroCtrl',
        });
        $routeProvider.when('/formSalidaAl', {
            templateUrl: '/templates/formSalidaAl.tpl',
            controller: 'planillaAlCtrl',
        });
        $routeProvider.when('/:selectedStatus?', {templateUrl: '/templates/todo.tpl'});



    }]);

// login controller handles user login
mainApp.controller('login-controller', function ($scope, $rootScope, LoginService, $location) {
    // LoginService is provided by angoose-users extension
    enterscope($scope, "LoginCtrl");
    var login = $scope.login = {username: '', password: ''}
    $scope.doLogin = function () {
        console.log("logining, scope", $scope);
        LoginService.signin(login.username, login.password, function (err, user) {
            if (!err && user) {
                console.log("LoginCtrl post login OK");
                $rootScope.user = user;
                $location.path("/home")
            }
            else {
                console.error("Error login", err);
                err && alert("Invalid username or password");
            }
        })
    };
    $scope.adminLogin = function () {
        login.username = 'admin@demo.com';
        login.password = 'demo';
        $scope.doLogin();
    }
});

mainApp.controller("nav-controller", function ($scope, $rootScope, $location, LoginService) {
    $scope.doLogout = function () {
        LoginService.signout(function () {
            console.log("Sign out complete");
            $rootScope.user = undefined;
            $location.path("/login");
        });
    }
});

// default exception handler
mainApp.factory('$exceptionHandler', function ($injector) {
    return function (exception, cause) {
        try {
            var $log = $injector.get("$log");
            $log.error.apply($log, arguments);
            var $alert = $injector.get("$alert");
            $alert.error(exception + "");
        }
        catch (err) {
            console.error("Interesting - error in error handler!", err)
        }
    };
});

mainApp.run(function ($rootScope, $alert, $location) {  // $alert service is provided by angoose.ui
    // when route changes, clear the error/warn/success messages if any
    $rootScope.$on("$routeChangeStart", function (event, next, current) {
        $alert.clear();
    });

    // when AuthError occurs from server side, go to login page
    $rootScope.$on("AngooseError", function (event, ex) {
        if (ex.name == 'AuthError')
            $location.path("/login");
    });
});
