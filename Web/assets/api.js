(function() {
    'use strict';

    angular.module('app').service('api', ['$resource', api]);

    function api($resource) {

      var rootUrl = 'http://www.onequickq.co';
      var endpoints = {
        'surveys': rootUrl + '/surveys',
        'survey': rootUrl + '/surveys/:id',
        'users': rootUrl + '/users',
        'user': rootUrl + '/users/:id'
      };

      var service = {
        getSurvey: getSurvey,
        getSurveys: getSurveys
      };

      return service;

      function getSurvey(id) {
        var Survey = $resource(endpoints.survey);
        var survey = Survey.get({id: id});
        return survey;
      }

      function getSurveys(callback) {
        var Surveys = $resource(endpoints.survey);
        Surveys.query(function(surveys){
          if(surveys) {
            callback(null, surveys);
          } else {
            callback({ message: 'Unable to retrieve surveys'});
          }
        });
      }
  }

})();