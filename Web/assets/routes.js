(function () {
    'use strict';

    var app = angular.module('app');

    // Collect the routes
    app.constant('routes', getRoutes());

    // Configure the routes and route resolvers
    app.config(['$routeProvider', 'routes', routeConfigurator]);
    function routeConfigurator($routeProvider, routes) {

        routes.forEach(function (r) {
            $routeProvider.when(r.url, r.config);
        });
        $routeProvider.otherwise({ redirectTo: '/' });
    }

    // Define the routes
    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    title: 'home',
                    templateUrl: 'home/home.html'
                }
            }, {
                url: '/admin',
                config: {
                    title: 'admin',
                    templateUrl: 'admin/admin.html',
                }
            }, {
                url: '/question/:id',
                config: {
                    title: 'question',
                    templateUrl: 'question/question.html'
                }
            }
        ];
    }
})();