import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema";

const app = express();

app.get("/", (req, res) => {
  res.send("GraphQ: is amazing!");
});

const root = {
  friend: () => {
    return {
      id: 232324323,
      firstName: "Sirwan",
      lastName: "Afifi",
      gender: "male",
      language: "Kurdish",
      emails: [
        { email: "sir1afifi@gmail.com" },
        { email: "email2@gmail.com" },
        { email: "email3@gmail.com" }
      ]
    };
  }
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);

app.listen(3000, () => {
  console.log("Running server on port localhost:3000/graphq;");
});
