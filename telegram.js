//Requiring telegram module
var telegram = require('telegram-bot-api');
var tele= require('./aiml.js');

//Initiating Telegram API
var api = new telegram({
    token: '182779550:AAGajN9WcBgLu4vD6dKp-sDDhdrua_3qj-s',
    updates: {
        enabled: true,
        get_interval: 1000
    }
});

//Listen to MESSAGE event
api.on('message', function(message)
{
    var chat_id = message.chat.id;

    //Go to aiml.js to interpret the query
    tele.find_ans(message.text);
    api.sendMessage({
        chat_id: message.chat.id,
        text: global.answer
    }).then(function(message)
    {
        console.log(message);
    }).catch(function(err)
    {
        console.log(err);
    });
});

