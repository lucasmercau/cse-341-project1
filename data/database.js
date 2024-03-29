const dotenv = require("dotenv"); // This helps us to read our connection string in when we're not in the production environments.

dotenv.config();

const MongoClient = require("mongodb").MongoClient; //I need to import our Mongol client. We are going to require that library again here ("mongo").

let database; //We are going to declare a variable for our database.

const initDb = (callback) => {
    if (database) { // If the database is set up, then we're going to pronounce already initialized and return.
        console.log("Db is already initialized!");
        return callback(null, database);
    }
    MongoClient.connect(process.env.MONGODB_URL) //Otherwise, we're going to call Mongo Db connect and we're going to use this URL here.
        .then((client) => { //Then if it's successful, 
            database = client;// we're going to set the client, this return from Mongo to the database variable here, 
            callback(null, database);
        })
        .catch((err) => { //otherwise we're going to return here.
            callback(err);
        });
};

const getDatabase = () => {
    if (!database) { //If there is not database
        throw Error("Database not initialized!")
    }
    return database;
};

module.exports = { //This exports these functions to other JS file.
    initDb,
    getDatabase
};