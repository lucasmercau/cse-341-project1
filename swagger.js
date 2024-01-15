const swaggerAutogen = require("swagger-autogen")(); //install npm i swagger-autogen. And also: npm i swagger-ui-express

const doc = {
    info: {
        title: "Contacts Api",
        description: "Contacts Api"
    },
    host: "localhost:3000",
    schemes: ["http", "https"]
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

//this will generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);