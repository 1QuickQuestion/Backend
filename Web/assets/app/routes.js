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
    //$routeProvider.otherwise({ redirectTo: '/' });
  }

  // Define the routes
  function getRoutes() {
    return [
      {
        url: '/',
        config: {
          title: 'home',
          templateUrl: '/app/home/home.html'
        }
      }, {
        url: '/admin',
        config: {
          title: 'admin',
          templateUrl: '/app/admin/admin.html',
        }
      }, {
        url: '/aklsw',
        config: {
          title: 'aklsw',
          templateUrl: '/app/aklsw/aklsw.html',
        }
      }, {
        url: '/xignals',
        config: {
          title: 'xignals',
          templateUrl: '/app/xignals/xignals.html'
        }
      }, {
        url: '/email',
        config: {
          title: 'email',
          templateUrl: '/app/email.html'
        }
      }, {
        url: '/fistpump',
        config: {
          title: 'fistpump',
          templateUrl: '/app/fistpump.html'
        }
      }
    ];
  }
})();