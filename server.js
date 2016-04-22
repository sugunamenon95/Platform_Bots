/**
 * Created by Suguna on 20-04-2016.
 */
var http=require('http');
var fs = require('fs');
var position = 52;
var file_path = 'test.aiml.xml';
aimlHigh = require('aiml-high');
var parser = require('xml2json');

var interpreter = new aimlHigh({name:'Search Bot', age:'42'}, 'Goodbye');
interpreter.loadFiles(['test.aiml.xml']);

function navigate() {
    //client connection
    io.on('connection', function(socket){

        //Listen to event QUERY, msg1 is pattern and msg2 is template
        socket.on('query', function(msg1, msg2){
            console.log(msg1 + '\n' + msg2);
            addData(msg1, msg2);
        });

        socket.on('DisplayTable', function() {
                parseFile('test.aiml.xml', function(data) {
                console.log(data);
                socket.emit('show',data);
            });


        });
        //socket.emit('DisplayTable',data);
    });
}

function parseFile(filename,cb) {
    var fs = require('fs');
    fs.readFile(filename, 'utf8', function(err, data) {
        if (err) throw err;
        console.log('OK: ' + filename);
        //console.log(data);
        var jsoncontent = parser.toJson(data);
        console.log(jsoncontent);
        cb(jsoncontent);
    });
}


//Add the pattern and template to test.aiml.xml
function addData(newtext1, newtext2) {
    fs.readFile(file_path, function read(err, data) {
        if (err) {
            throw err;
        }
        var new_text = "\t" + '<category>' + "\n" + "\t" + "\t" +'<pattern>' + newtext1 + '</pattern>' + "\n" + "\t" + "\t" + '<template>' + newtext2 + '</template> ' + "\n" + "\t" + ' </category>'+ "\n";
        var file_content = data.toString();
        file_content = file_content.substring(position);
        var file = fs.openSync(file_path, 'r+');
        var bufferedText = new Buffer(new_text + file_content);
        fs.writeSync(file, bufferedText, 0, bufferedText.length, position);
        fs.close(file);
    });
}

module.exports= {
    nav: navigate
};