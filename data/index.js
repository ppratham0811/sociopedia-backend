import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: userIds[0],
    firstName: "test",
    lastName: "me",
    email: "aaaaaaa@gmail.com",
    username: "test123",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    profilePic: "p11.jpeg",
    friends: [],
    location: "San Fran, CA",
    occupation: "Software Engineer",
    viewedProfile: 14561,
  },
  {
    _id: userIds[1],
    firstName: "Steve",
    lastName: "Ralph",
    email: "thataaa@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    username: "stevie123",
    profilePic: "p3.jpeg",
    friends: [],
    location: "New York, CA",
    occupation: "Degenerate",
    viewedProfile: 12351,
  },
  {
    _id: userIds[2],
    firstName: "Some",
    lastName: "Guy",
    username: "someguy123",
    email: "someguy@gmail.com",
    password: "da39a3ee5e6b4b0d3255bfef95601890afd80709",
    profilePic: "p4.jpeg",
    friends: [],
    location: "Canada, CA",
    occupation: "Data Scientist Hacker",
    viewedProfile: 45468,
  },
  {
    _id: userIds[3],
    firstName: "Whatcha",
    username: "whatchadoing123",
    lastName: "Doing",
    email: "whatchadoing@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    profilePic: "p6.jpeg",
    friends: [],
    location: "Korea, CA",
    occupation: "Educator",
    viewedProfile: 41024,
  },
  {
    _id: userIds[4],
    firstName: "Jane",
    lastName: "Doe",
    username: "janedoe123",
    email: "janedoe@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    profilePic: "p5.jpeg",
    friends: [],
    location: "Utah, CA",
    occupation: "Hacker",
    viewedProfile: 40212,
  },
  {
    _id: userIds[5],
    firstName: "Harvey",
    lastName: "Dunn",
    username: "harvey123",
    email: "harveydunn@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    profilePic: "p7.jpeg",
    friends: [],
    location: "Los Angeles, CA",
    occupation: "Journalist",
    viewedProfile: 976,
  },
  {
    _id: userIds[6],
    firstName: "Carly",
    lastName: "Vowel",
    username: "carly123",
    email: "carlyvowel@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    profilePic: "p8.jpeg",
    friends: [],
    location: "Chicago, IL",
    occupation: "Nurse",
    viewedProfile: 1510,
  },
  {
    _id: userIds[7],
    firstName: "Jessica",
    lastName: "Dunn",
    username: "jessica123",
    email: "jessicadunn@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    profilePic: "p9.jpeg",
    friends: [],
    location: "Washington, DC",
    occupation: "A Student",
    viewedProfile: 19420,
  },
];

export const posts = [
  {
    userId: userIds[1],
    firstName: "Steve",
    lastName: "Ralph",
    username: userIds[1],
    location: "New York, CA",
    description: "Some really long random description",
    postPic: "post1.jpeg",
    userPicture: "p3.jpeg",
    likes: new Map([
      [userIds[0], true],
      [userIds[2], true],
      [userIds[3], true],
      [userIds[4], true],
    ]),
    comments: [
      {user: userIds[4], body: "random comment 1"},
      {user: userIds[4], body: "random comment 2"},
      {user: userIds[4], body: "random comment 3"}
    ],
  },
  {
    userId: userIds[3],
    firstName: "Whatcha",
    lastName: "Doing",
    username: userIds[3],
    location: "Korea, CA",
    description:
      "Another really long random description. This one is longer than the previous one.",
    postPic: "post2.jpeg",
    userPicture: "p6.jpeg",
    likes: new Map([
      [userIds[7], true],
      [userIds[4], true],
      [userIds[1], true],
      [userIds[2], true],
    ]),
    comments: [],
  },
  {
    userId: userIds[4],
    firstName: "Jane",
    lastName: "Doe",
    username: userIds[4],
    location: "Utah, CA",
    description:
      "This is the last really long random description. This one is longer than the previous one.",
    postPic: "post3.jpeg",
    userPicture: "p5.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
      [userIds[5], true],
    ]),
    comments: [],
  },
  {
    userId: userIds[5],
    firstName: "Harvey",
    lastName: "Dunn",
    username: userIds[5],
    location: "Los Angeles, CA",
    description:
      "This is the last really long random description. This one is longer than the previous one. Man I'm bored. I'm going to keep typing until I run out of things to say.",
    postPic: "post4.jpeg",
    userPicture: "p7.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
    ]),
    comments: [],
  },
  {
    userId: userIds[6],
    firstName: "Carly",
    lastName: "Vowel",
    username: userIds[6],
    location: "Chicago, IL",
    description:
      "Just a short description. I'm tired of typing. I'm going to play video games now.",
    postPic: "post5.jpeg",
    userPicture: "p8.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[3], true],
      [userIds[5], true],
      [userIds[7], true],
    ]),
    comments: [],
  },
  {
    userId: userIds[7],
    firstName: "Jessica",
    lastName: "Dunn",
    username: userIds[7],
    location: "Washington, DC",
    description:
      "For the last time, I'm going to play video games now. I'm tired of typing. I'm going to play video games now.",
    postPic: "post6.jpeg",
    userPicture: "p9.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[2], true],
    ]),

    comments: [],
  },
];