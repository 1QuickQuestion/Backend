(function () {
    'use strict';

    var app = angular.module('app', [
        // Angular modules
        // 'ngAnimate',        // animations
        'ngRoute',             // routing
        'ngResource'           // resources
        // 'ngSanitize',       // sanitizes html bindings (ex: sidebar.js)

    ]);

    // Handle routing errors and success events
    app.run(['$route',  function ($route) {
      // Include $route to kick start the router.
    }]);
})();