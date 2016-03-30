// Requiring our module
var slackAPI = require('slackbotapi');
var tele = require('./aiml.js');
// Starting
var slack = new slackAPI({
    'token': 'xoxb-23679594023-eJWvcq6aWevzEW1EzOy06L1U',
    'logging': true,
    'autoReconnect': true
});

// Slack on EVENT message, send data.
slack.on('message', function (data) {
    // If no text, return.
    //if (typeof data.text == 'undefined') return;
    // If someone says `cake!!` respond to their message with 'user OOH, CAKE!! :cake:'
    tele.find_ans(data.text);
    slack.sendMsg(data.channel, '@' + slack.getUser(data.user).name + ' ' + global.r);

});

