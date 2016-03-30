var telegram = require('telegram-bot-api');
var tele= require('./aiml.js');
var api = new telegram({
    token: '143890280:AAHqathDN6J6wtPleyEOy8GBosujsB_e1QY',
    updates: {
        enabled: true,
        get_interval: 1000
    }
});

api.on('message', function(message)
{
    var chat_id = message.chat.id;

    // It'd be good to check received message type here
    // And react accordingly
    // We consider that only text messages can be received here
    tele.find_ans(message.text);

    api.sendMessage({
        chat_id: message.chat.id,
        text: global.r /*message.text ? message.text : 'This message doesn\'t contain text :('*/
    }).then(function(message)
    {
        console.log(message);
    }).catch(function(err)
    {
        console.log(err);
    });
});

