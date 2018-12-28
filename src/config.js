var convict = require('convict');

var config = convict({
    datadog: {
        url: {
          doc:     'The JSON resource url.',
          default: 'foo',
          format:  String,
          env:     'JSON_RES_URL'
        },
        api_key : {
          doc:     'api key',
          default: "",
          format:   String,
          env:      'DATADOG_API_KEY' 
        },
        application_key : {
          doc:     'application key',
          default: "",
          format:   String,
          env:      'DATADOG_APPLICATION_KEY' 
        }
    }
});

module.exports = config;