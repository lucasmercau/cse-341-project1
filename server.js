const express = require("express"); //Imports the express module that we installed using "npm i express".
const bodyParser = require("body-parser");
const mongodb = require("./data/database");

const app = express();

const port = process.env.PORT || 3000; //This is what most of the cloud enviroments used to theclare the port. (Render, Microsoft Azure, Amazon Web Services, Google Cloud, use this variable) How is not defined we wil use port 3000.

app.use(bodyParser.json()); //createContact works because of this. npm i body-parser is necesary. It should be before the routes.

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); //We've added this to allow any header cross origin.
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Z-Key"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); //We are allowing all the get methods from API.
    next();
});

app.use("/", require("./routes")) //Our application, use some middleware. If it comes to the slash or the root of the website, we're going to "require", again, include another library. What node JS is going to do? If we get any traffic on that website at route, it will redirect a ./routes.



mongodb.initDb((err) => { //Created here the function initDb() with err as parameter
    if (err) // If there is an error then {}
    {
        console.log(err); 
    }
    else {
        app.listen(port, () => {console.log(`Database is listening and node Running on port ${port}`)}); //Listen for traffic in that port.
    }
})

//Before being in else this was outside:
//app.listen(port, () => {console.log(`Running on port ${port}`)}); //Listen for traffic in that port.