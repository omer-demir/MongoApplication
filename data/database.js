(function(database) {
	var mongodb=require('mongodb');
	var connectString='mongodb://localhost:27017/MongoApplication';
	var db=null;

	database.getDatabase=function(next) {
		if (!db) {
			mongodb.MongoClient.connect(connectString,function(err,db){
				if (err) {
					next(err,null);
				} else{
					db={
						db:db,
						notes:db.collection('notes')
					};
					next(null,db);
				}
			});
		}else{
			next(null,db);
		}	
	};
})(module.exports);