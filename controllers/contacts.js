const mongodb = require("../data/database");
const ObjectId = require("mongodb").ObjectId; //This is the unique object ID that assigns to all its database entries. Our Primary Key.

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection("contacts").find();
    result.toArray().then((contacts) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(contacts);
    })
}

const getSingle = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection("contacts").find({ _id: userId });
    result.toArray().then((contacts) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(contacts[0]);
    })
}


module.exports = {
    getAll,
    getSingle
}