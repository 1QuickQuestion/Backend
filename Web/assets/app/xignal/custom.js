var app = angular.module('MobileAngularUiExamples', [
  "ngRoute",
  "ngTouch",
  "mobile-angular-ui"
]);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/',          {templateUrl: "app/home.html"});
  $routeProvider.when('/email',    {templateUrl: "app/email.html"}); 
  $routeProvider.when('/fistpump',    {templateUrl: "app/fistpump.html"});
});

app.service('analytics', [
  '$rootScope', '$window', '$location', function($rootScope, $window, $location) {
    var send = function(evt, data) {
      ga('send', evt, data);
    }
  }
]);

app.controller('MainController', function($rootScope, $scope, analytics){

  $rootScope.$on("$routeChangeStart", function(){
    $rootScope.loading = true;
  });

  $rootScope.$on("$routeChangeSuccess", function(){
    $rootScope.loading = false;
  });

  angular.module('range', [])
    .controller('rangeController', ['$scope', function($scope) {
      $scope.change = function() {
      };
    }]);

});