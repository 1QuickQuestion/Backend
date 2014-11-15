(function () {
    'use strict';

    var controllerId = 'question';
    angular.module('app').controller(controllerId,
      ['$routeParams', 'api', question]);

    function question($routeParams, api) {

        var vm = this;
        var id = $routeParams.id;

        if(id) {
          vm.survey = api.getSurvey(id);
        } else {
          vm.survey = {};
          vm.survey.name = "No survey found";
        }

    };
})();