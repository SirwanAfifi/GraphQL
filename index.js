import express from "express";
import  graphqlHTTP from "express-graphql";
import schema from "./schema";

const app = express();

app.get("/", (req, res) => {
    res.send("GraphQ: is amazing!");
});

const root = { hello: () => "Hi, I'm Sirwan"};

app.use("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(3000, () => { console.log("Running server on port localhost:3000/graphq;")});