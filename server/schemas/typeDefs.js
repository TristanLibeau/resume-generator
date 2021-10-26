const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
        password: String
    }

    type Auth {
        token: ID!
        user: user
    }

    type Query {
        users: [user]
        user(username: String!: User 
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
    }  
`

module.exports = typeDefs;

// type Auth {
//     token: ID!        ID has an unique identifier, in this case is the token
//     student: Student  Refers to student profile
// }