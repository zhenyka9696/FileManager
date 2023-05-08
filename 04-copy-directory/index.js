const fs= require ('fs');
fs.cpSync('./files', './files-copy',{recursive:true});
