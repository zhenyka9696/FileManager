const fs =require('fs');
const path = require('path');
fs.readdir('./secret-folder',(err,data) =>{
	console.log(data);
	data.forEach(file =>{
		console.log(file.slice(0,file.lastIndexOf('.')) + '-' + path.extname(file).replace(/\./g,'') + '-' + fs.statSync('./secret-folder/'+file).size + 'b');
	});
})