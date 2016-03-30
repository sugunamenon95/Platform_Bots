# Platform_Bots

#configurations for telegram

var telegram = require('telegram-bot-api');
var api = new telegram({
    token: '<YOUR_TOKEN>',
    updates: {
        enabled: true,
        get_interval: 1000
    }
});

#configuration for slack
var slackAPI = require('slackbotapi');
var slack = new slackAPI({
    'token': '<YOUR_TOKEN>',
    'logging': true,
    'autoReconnect': true
});

As soon as someone will message on the respective application it will go to aiml platform to fetch the command

#AIML files and configuration

aimlHigh = require('aiml-high');
interpreter.loadFiles(['./test.aiml.xml']);

Command will be fetched and we will be directed to the common platform wherein required data will be fetched and a uniform answer format will be created to emit it to the requied paltform
