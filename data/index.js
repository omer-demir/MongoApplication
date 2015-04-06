(function(data) {
    var seedData = require('./seedData');
    var database = require('./database');
    data.getNotes = function() {
        return seedData.initialNotes;
    };

    function seedDatabase() {
        database.getDatabase(function(err, db) {
            if (err) {
                console.log("Error occured while getting database");
            } else {
                db.notes.find({}).count(function(err, length) {
                    if (err) {
                        console.log("Error occured while counting data");
                    } else {
                        if (length > 0) {
                            console.log("Database already seeded.");
                        } else {
                            seedData.initialNotes.forEach(function(item) {
                                db.notes.insert(item, function(err) {
                                    if (err) {
                                        console.log("Error occured while seeding database");
                                    }
                                });
                            });
                            console.log("Database seeded");
                        }
                    }
                });
            }
        });
    };
    
    seedDatabase();
})(module.exports);