import express from "express";
import  graphqlHTTP from "express-graphql";
import schema from "./schema";

const app = express();

app.get("/", (req, res) => {
    res.send("GraphQ: is amazing!");
});

const root = { friend: () => {
    return {
        "id": 232324323,
        "firstName": "Sirwan",
        "lastName": "Afifi",
        "gender": "male",
        "language": "Kurdish",
        "email": "sir1afifi@gmail.com"
    }
}};

app.use("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(3000, () => { console.log("Running server on port localhost:3000/graphq;")});