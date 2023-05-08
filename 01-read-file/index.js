var fs = require('fs');
var readResult = '';
function readFile(){
try{
    var data = fs.readFileSync('E:/JSFileManager_for_git/01-read-file/text.txt', 'utf8');
    readResult =  data.toString();
    console.log(readResult);
    return readResult;
}
catch(e){
    console.error('Error', e.stack);
}
}

readFile();

module.exports = {
    readFile,
};