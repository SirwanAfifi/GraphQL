import mongoose from "mongoose";
import { Friends } from "./dbConnectors";

// resolver map
export const resolvers = {
  Query: {
    getFriend: (root, { id }) => {
      return Friends.findById(id).exec();
    },
    users: root => {
      return [
        { id: 1, firstName: "Sirwan", lastName: "Afifi", age: 29 },
        { id: 2, firstName: "User 2", lastName: "UserLastName2", age: 20 },
        { id: 3, firstName: "User 3", lastName: "UserLastName3", age: 20 },
        { id: 4, firstName: "User 4", lastName: "UserLastName4", age: 20 },
        { id: 5, firstName: "User 5", lastName: "UserLastName5", age: 20 },
        { id: 6, firstName: "User 6", lastName: "UserLastName6", age: 20 },
        { id: 7, firstName: "User 7", lastName: "UserLastName7", age: 20 },
        { id: 8, firstName: "User 8", lastName: "UserLastName8", age: 20 }
      ];
    }
  },
  Mutation: {
    createFriend: (root, { input }) => {
      const newFriend = new Friends({
        firstName: input.firstName,
        lastName: input.lastName,
        gender: input.gender,
        age: input.age,
        language: input.language,
        email: input.email,
        contacts: input.contacts
      });
      newFriend.id = newFriend._id;

      return new Promise((resolve, object) => {
        newFriend.save(err => {
          if (err) reject(err);
          else resolve(newFriend);
        });
      });
    },
    updateFriend: (root, { input }) => {
      return new Promise((resolve, object) => {
        Friends.findOneAndUpdate(
          { _id: input.id },
          input,
          { new: true },
          (err, friend) => {
            if (err) reject(err);
            else resolve(friend);
          }
        );
      });
    },
    deleteFriend: (root, { id }) => {
      return new Promise((resolve, object) => {
        Friends.remove({ _id: id }, err => {
          if (err) reject(err);
          else resolve("Successfully deleted friend");
        });
      });
    }
  }
};
