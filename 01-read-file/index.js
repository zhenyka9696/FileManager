var fs = require('fs');
try{
    var data = fs.readFileSync('E:/JSFileReader&more/HTML-builder/01-read-file/text.txt', 'utf8');
    console.log(data.toString());
}
catch(e){
    console.error('Error', e.stack);
}