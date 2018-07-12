const express = require("express");

const app = express();
const PORT = 8888;


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