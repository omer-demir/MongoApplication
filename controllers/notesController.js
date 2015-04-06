(function(notesController) {
	var data=require('../data');

	notesController.init=function(expressApp) {
		console.log("Note Controller initializing...");

        expressApp.get('/notes', function(req, resp) {
        	//getting initial notes from data
        	var initNotes=data.getNotes();
        	//rendering notes page with initNotes data
            resp.render('notes', {
                notes:initNotes
            });
        });

        console.log("Note Controller initialized...");
	};

})(module.exports);