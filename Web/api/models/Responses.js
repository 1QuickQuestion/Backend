/**
* Responses.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
    connection: 'someMongodbServer',
    attributes: {
        questionId : { type: 'string', required: true },
        responderId: 'string',
        value : { type: 'string' },
        numberValue : { type: 'integer' }
    }
};

