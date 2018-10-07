class Friend {
  constructor(id, { firstName, lastName, gender, language, email, contacts }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.language = language;
    this.email = email;
    this.contacts = contacts;
  }
}

const friendDatabse = {};

const resolvers = {
  getFriend: ({ id }) => {
    return new Friend(id, friendDatabse[id]);
  },
  createFriend: ({ input }) => {
    let id = require("crypto")
      .randomBytes(10)
      .toString("hex");
    friendDatabse[id] = input;
    return new Friend(id, input);
  }
};

export default resolvers;
