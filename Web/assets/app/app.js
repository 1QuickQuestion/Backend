(function () {
  'use strict';

  var app = angular.module('app', [
    // Angular modules
    // 'ngAnimate',        // animations
    'ngRoute',             // routing
    'ngResource'           // resources
    // 'ngSanitize',       // sanitizes html bindings (ex: sidebar.js)
  ]);

  app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode({enabled: true, requireBase: false});
  }]);

  // Handle routing errors and success events
  app.run(['$route',  function ($route) {
    // Include $route to kick start the router.
  }]);

})();