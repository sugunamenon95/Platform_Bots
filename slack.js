// Requiring slack module
var slackAPI = require('slackbotapi');
var tele = require('./aiml.js');
// Initiate slack API
var slack = new slackAPI({
    'token': 'xoxb-23679594023-koF5Qc8n5VV6Y6MbTwmXBtoa',
    'logging': true,
    'autoReconnect': true
});

//Slack on event MESSAGE, send data.
slack.on('message', function (data) {
    //if (typeof data.text == 'undefined') return;
    //Go to aiml.js to interpret the query
    tele.find_ans(data.text);

    //Send the reply to slack channel
    slack.sendMsg(data.channel, '@' + slack.getUser(data.user).name + ' ' + global.answer.toString());

});



