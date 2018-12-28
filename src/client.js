import request from 'superagent-bluebird-promise';
import config  from './config';
import chalk   from 'chalk';

/**
 * @param {Mozaik} mozaik
 */
const client = function (mozaik) {

    mozaik.loadApiConfig(config);

    function buildApiRequest() {
        let baseURL = 'https://api.datadoghq.com/api/v1/org'
        let apiKey = config.get("datadog.api_key")
        let applicationKey = config.get('datadog.application_key')
        let url     = baseURL + "?api_key=" + apiKey + "&?application_key=" + applicationKey
        let req     = request.get(url);

        mozaik.logger.info(chalk.yellow(`[json] calling ${ url }`));

        return req.promise();
    }

    const apiCalls = {
        data(params) {
            return buildApiRequest()
                .then(res => JSON.parse(res))
            ;
        }
    };
    return apiCalls;
};

export { client as default };