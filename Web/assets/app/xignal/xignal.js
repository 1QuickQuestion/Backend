(function () {
    'use strict';

    var controllerId = 'xignal';
    angular.module('app').controller(controllerId, ['$location', 'api', xignal]);

    function xignal($location, api) {
      var vm = this;
      var id = $location.path().split('/')[2];

      if(id){
        var survey = api.getSurvey(id);
        survey.$promise.then(populateVm, showError);
      }

      function populateVm(survey){
        vm.survey = survey;
      }

      function showError(err){
        console.log(err);
      }

    };
})();