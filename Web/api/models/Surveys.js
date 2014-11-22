/**
 * Surveys.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  connection:  'someMongodbServer',
  attributes:  {
    userId:      {type: 'string', required: true},
    name:        {type: 'string', required: true},
    description: 'string',
    location:    'string',
    shortUrl:    'string',
    qrCode:      'string',
    questions:   {collection: 'questions'},
    responses:   {collection: 'responses'}
  },
  // Lifecycle Callbacks
  afterCreate: function (values, cb) {
    var bitlyApi = require("node-bitlyapi");
    var bitly = new bitlyApi();
    bitly.setAccessToken(sails.config.bitly.access_token);
    bitly.shortenLink(sails.config.surveys_host + '/id/' + values.id, function (err, results) {
      if (err) {
        return console.log('Bitly API error: ', err);
      }
      values.shortUrl = JSON.parse(results).data.url;
      values.qrCode = "https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=" + values.shortUrl;
      Surveys.update({id: values.id}, {shortUrl: values.shortUrl, qrCode: values.qrCode})
        .exec(function (err, updatedServers) {
        });
      cb();
    });
  }
};

