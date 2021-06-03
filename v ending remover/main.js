const fs = require('fs');
const path = require("path");
const readline = require('readline');

var filePath = "C:\\Users\\Max Fisher\\Desktop\\Source lol\\wario4land_gba_ique\\src\\enemy\\";
var counter = 0;
  
  //Read the targeted directory
fs.readdir(filePath, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
	//Loop though each file in the targeted directory
    files.forEach(function (file) {

        //If the file format has ",v" in any part of it (typically the end of the file) 
        if(file.includes(",v") == true){
            counter++;
            //Combine the filepath with the actual file so we can rename it.
            var combine = filePath+"\\"+file;
            //Remove ",v" from the file type ending
            fs.rename(combine, combine.replace(",v", ""), function(err) {
                if ( err ) console.log('ERROR: ' + err);
            });
        }

    });
    console.log(`Modified ${counter} files.`);
});

