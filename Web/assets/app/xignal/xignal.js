(function () {
    'use strict';

    var controllerId = 'xignal';
    angular.module('app').controller(controllerId, ['$location', 'api', xignal]);

    function xignal($location, api) {
      var vm = this;
      var questionIndex = 0;
      var numberOfQuestions;
      var id = $location.path().split('/')[2];

      vm.showLastPage = false;
      vm.canGoBack = false;
      vm.email = '';
      vm.nps = '5';

      vm.color = function(q){
        if(q.type == 'string') return 'blue';
        if(q.type == 'range') return 'purple';
        return 'green';
      }

      vm.showPage = function(index) {
        return index == questionIndex;
      }

      vm.isString = function(q){
        return q.type == 'string';
      }

      vm.isText = function(q){
        return q.type == 'text';
      }

      vm.isRange = function(q){
        return q.type == 'range';
      }

      vm.next = function(){
        var response = {questionId: vm.survey.questions[questionIndex].id};

        if(questionIndex < numberOfQuestions) {

          // create question and save values
          if(questionIndex == 1) response.value = vm.email;
          if(questionIndex == 0) response.numberValue = vm.nps;

          api.createResponse(vm.survey.id, response);

          questionIndex++;
        }

        vm.canGoBack = true;

        if(questionIndex == numberOfQuestions) {
          // create question and save values
          // publish response
          vm.showLastPage = true;
          vm.canGoBack = false;
        }

        return false;
      }

      if(id){
        var survey = api.getSurvey(id);
        survey.$promise.then(populateVm, showError);
      }

      function populateVm(survey){
        vm.survey = survey;
        numberOfQuestions = survey.questions.length;
      }

      function showError(err){
        console.log(err);
      }

    };
})();