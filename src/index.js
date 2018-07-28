import {verifyUserBody} from "./middlewares/user";
import {AuthUser} from "./db/in_mem";
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 8888;

app.use(bodyParser.json());

app.post("/login", (req, res) => {
    let user;
    try {
        verifyUserBody(req);
    }
    catch (e) {
        res
            .status(400)
            .send(e.message);
        return;
    }
    try {
        user = AuthUser(req.body.username, req.body.password);
    }
    catch (e){
        res
            .sendStatus(401);
        return;
    }
    res
        .status(200)
        .send(`You successfully logged in with ${user.username}`);
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