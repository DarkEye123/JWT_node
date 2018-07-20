const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 8888;


app.use(bodyParser.json());

app.post("/login", (req, resp) => {
    const user = req.body.username
    resp
        .status(200)
        .send(`You successfully logged in with ${user}`)
});

app.get("/status", (_, resp) => {
    const localTime = (new Date()).toLocaleTimeString();
    resp
        .status(200)
        .send(`Server time is ${localTime}.`);
});

app.get("*", (_, resp) => {
   resp.send(404);
});


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});