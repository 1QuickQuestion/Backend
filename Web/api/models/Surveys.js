/**
* Surveys.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {
        userId : 'int',
        name: 'string',
        description: 'string',
        location: 'string',
        shortUrl: 'string',
        questions: { collection: 'questions' },
        responses : { collection : 'responses'}
  }
};

