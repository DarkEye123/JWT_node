import {verifyUserBody} from "./middlewares/user";
import {User} from "./types/user";
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 8888;

// const INMEM_DB = {
//     "admin":"admin",
//     "member":"member"
// };


app.use(bodyParser.json());

app.post("/login", (req, resp) => {
    let msg, status;
    let err = verifyUserBody(resp);
    if (!err) {
        let user = new User(resp);
        status = 200;
        msg = `You successfully logged in with ${user.username}`;
    } else {
        status = 404;
        msg = "unauthorized";
    }
    resp
        .status(status)
        .send(msg);
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