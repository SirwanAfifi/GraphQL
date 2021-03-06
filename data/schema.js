import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";

const typeDefs = `
    type Friend {
        id: ID,
        firstName: String,
        lastName: String
        gender: Gender,
        age: Int,
        language: String,
        email: String,
        contacts: [Contact]
    }

    type Contact {
        firstName: String
        lastName: String
    }

    enum Gender {
        MALE
        FEMALE
        OTHER
    }

    input ContactInput {
        firstName: String
        lastName: String
    }

    input FriendInput {
        id: ID,
        firstName: String!,
        lastName: String
        gender: Gender,
        age: String
        language: String,
        email: String,
        contacts: [ContactInput]
    }

    type User {
        id: ID!
        firstName: String
        lastName: String
        age: Int
    }

    type Query {
        getFriend(id: ID): Friend
        users: [User]
    }

    type Mutation {
        createFriend(input: FriendInput): Friend
        updateFriend(input: FriendInput): Friend
        deleteFriend(id: ID!): String
    }

`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };
