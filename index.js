import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("GraphQ: is amazing!");
});

app.listen(3000, () => { console.log("Running server on port localhost:3000/graphq;")});