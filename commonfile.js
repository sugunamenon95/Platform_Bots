/**
 * Created by Suguna on 30-03-2016.
 */
var request = require('request');
var reply;
function backend(ans, name)
{
    var headers = {
        'Content-Type': 'application/json'
    };
    var dataString = '{"methodName": "searchPersons", "parameters": ["254756ae6269c400635afdb52cf92c3c", ' + '"' + name + '"' + '], "serviceName": "com.avinashi.meraCRM.services.search.SearchService"}';

    var options = {
        url: 'http://client.meracrm.com',
        method: 'POST',
        headers: headers,
        body: dataString
    };

    function cb(error, response, body) {
        if (!error && response.statusCode == 200) {
            reply = body;
        }
        else {
            console.log(error);
        }
    }

    request(options, cb);

    //Setting the final answer to be given on the channel
    global.answer = ans + reply.toString();
}

module.exports= {
    back:backend
};