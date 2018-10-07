import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema";

const app = express();

app.get("/", (req, res) => {
  res.send("GraphQ: is amazing!");
});

class Friend {
  constructor(id, { firstName, lastName, gender, language, email }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.language = language;
    this.email = email;
  }
}

const friendDatabse = {};

const root = {
  friend: () => {
    return {
      id: 232324323,
      firstName: "Sirwan",
      lastName: "Afifi",
      gender: "male",
      language: "Kurdish",
      email: "sir1afifi@gmail.com"
    };
  },
  createFriend: ({ input }) => {
    let id = require("crypto")
      .randomBytes(10)
      .toString("hex");
    friendDatabse[id] = input;
    return new Friend(id, input);
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
