aimlHigh = require('aiml-high');
var rep=require('./telegram.js');
var back = require('./commonfile.js');
var interpreter = new aimlHigh({name:'Bot', age:'42'}, 'Goodbye');
interpreter.loadFiles(['./test.aiml.xml']);

var callback = function(answer, wildCardArray, input){
    console.log(answer + ' | ' + wildCardArray + ' | ' + input);
    //Fetches the answer for the query from MeraCRM API
    back.back(answer, wildCardArray[0]);
};

//Parses the test.aiml.xml to interpret the query and identifies the corresponding template
function find_ans(ans){
    interpreter.findAnswer(ans, callback);
};

module.exports= {
    find_ans: find_ans
};