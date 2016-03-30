aimlHigh = require('aiml-high');
var rep=require('./telegram.js');
var back = require('./commonfile.js');
var interpreter = new aimlHigh({name:'Bot', age:'42'}, 'Goodbye');
interpreter.loadFiles(['./test.aiml.xml']);

//ar set_reply;
var callback = function(answer, wildCardArray, input){
    console.log(answer + ' | ' + wildCardArray + ' | ' + input);
    back.back(answer);
    //global.r = answer;
    //console.log(global.r);
    //rep.send_reply(set_reply);

};
function find_ans(ans){
    interpreter.findAnswer(ans, callback);
};

module.exports= {
    find_ans: find_ans
    //set_reply: set_reply
};