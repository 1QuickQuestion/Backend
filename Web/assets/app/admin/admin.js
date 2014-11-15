(function () {
    'use strict';

    var controllerId = 'admin';
    angular.module('app').controller(controllerId, ['api', admin]);

    function admin(api) {
        var vm = this;
        api.getSurveys(function(err, surveys){
          vm.surveys = surveys;
        });

        var newSurvey = api.createSurvey({
          "questions": [
            {
              "text": "a string question",
              "type": "string"
            }, {
              "text": "a range questino",
              "type": "range"
            }
          ],
          "userId": "1",
          "name": "Don is done testing",
          "description": "rate me please!",
          "location": "the grid akl",
          "shortUrl": "http://smthg/12"
          }
        );

        newSurvey.then(function(s){
          vm.surveys.push(s);
        });
    };
})();