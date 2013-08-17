var models = [/*'./users.js'*/]
,	fs = require('fs')
,	$ = require('utils');
exports.initialize = function(directory) {
	fs.readdir(directory, function(err, files){
		$.each(files, function(i,file){
			var parts = file.split('.');
			if(parts[1] === 'model'){
				models[$.length(models)] = './'+file;
			}
		});
		var l = models.length;
	    for (var i = 0; i < l; i++) {
	        require(models[i])();
	    }
	});
};
