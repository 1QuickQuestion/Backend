(function () {
    'use strict';

    var controllerId = 'xignals';
    angular.module('app').controller(controllerId, ['api', xignals]);

    function xignals(api) {

        var vm = this;
        api.getSurveys(function(err, surveys){
          if(err){
            return console.log(err.message);
          }
          vm.xignals = surveys;
        });

    };
})();