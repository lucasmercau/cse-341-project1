//This is the file that node looks for when it's looking for paths.

const router = require("express").Router(); //.Router() It allows us to handle routes.

router.use("/", require("./swagger"));

router.get("/", (req, res) => {
    //#swagger.tags=["Hello World"]
    res.send("Hello World");
})

// router.get("/", (req, res) => ( res.send("Hello World!"))); // we're just going to do a .get() to get request
// Any get request which is basically just ulr browser is going to return this back. We can add more of these.

router.use("/contacts", require("./contacts"));

module.exports = router; //So that exports our router's configured.

// So basically we have created our own webserver and have traffic monitoring on that port.