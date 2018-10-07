import express from "express";
import graphqlHTTP from "express-graphql";
import { schema } from "./data/schema";

const app = express();

app.get("/", (req, res) => {
  res.send("GraphQ: is amazing!");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(3000, () => {
  console.log("Running server on port localhost:3000/graphql");
});
