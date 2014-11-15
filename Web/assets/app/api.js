(function() {
    'use strict';

    angular.module('app').service('api', ['$resource', api]);

    function api($resource) {

      var rootUrl = 'http://www.xignal.co';
      var endpoints = {
        'surveys': rootUrl + '/surveys',
        'surveyQuestions': rootUrl + '/surveys/getQuestions/:id',
        'users': rootUrl + '/users',
        'user': rootUrl + '/users/:id'
      };

      var service = {
        getSurvey: getSurvey,
        getSurveys: getSurveys,
        createSurvey: createSurvey
      };

      return service;

      function getSurvey(id) {
        var Survey = $resource(endpoints.surveyQuestions);
        var survey = Survey.get({id: id});
        return survey;
      }

      function getSurveys(callback) {
        var Surveys = $resource(endpoints.surveys);
        var surveys = Surveys.query(function(surveys){
          if(surveys) {
            callback(null, surveys);
          } else {
            callback({ message: 'Unable to retrieve surveys'});
          }
        });
      }

      function createSurvey(newSurvey){
        var Survey = $resource(endpoints.surveys);
        var survey = new Survey();
        _.extend(survey, newSurvey);
        return survey.$save();
      }
  }

})();