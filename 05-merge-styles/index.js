const fs = require('fs');
const path = require('path'); 
//filepath = './styles/style-1.css';// TODO: automize path search
folder = './styles';
var mergedFile = [];
var fileArray = [];
var fileName;
var readFolderComplete = false;
var readFileComplete = false;

function readFolder(finalFolder){
    fs.readdir(finalFolder,(err,data) =>{
        console.log('data : ' + data);
        data.forEach(file =>{
            fileName =(file.slice(0,file.lastIndexOf('.txt')) + 's');
            console.log('fileName : ' + fileName);
            fileArray.push(fileName);
        });
        console.log('fileArray : ' + fileArray);
        console.log(fileArray[0]);
        readFolderComplete=true;
        return fileArray;
    });
}

readFolder(folder);


function readFile(){
    if (readFolderComplete == true){
        for(var i = 0; i<fileArray.length; i++){
            fs.readFile(('./styles/'+fileArray[i]), 'utf8', function(err, output) { 
            if (err){
                console.log('reading ended');
                readFolderComplete = false;
            } 
            console.log('output : ' + output);
            mergedFile.push(output);
            console.log('mergedFile : ' + mergedFile);
            readFileComplete = true;
});
}
console.log('fileArray.length : '+fileArray.length);
writeFile();
}
    else {
        setTimeout(readFile,1000);
    }
}

setTimeout(readFile,1000);

function writeFile(){
    if (readFileComplete == true){
require("fs").writeFileSync('bundle.css',(mergedFile.join('\n')));
fs.rename('bundle.css', './project-dist/bundle.css', err => {
    if(err) throw err;
});
}
    else{
        setTimeout(writeFile,1000);
    }
}