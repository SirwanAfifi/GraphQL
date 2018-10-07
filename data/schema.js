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

    type Query {
        getFriend(id: ID): Friend
    }

    type Mutation {
        createFriend(input: FriendInput): Friend
    }

`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };
