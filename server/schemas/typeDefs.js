const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        password: String
        userType: String
    }

    type Auth {
        token: ID!
        student: Student
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(input: SavedBookInput): User
        removeBook(bookId: String!): User
    }  
`

module.exports = typeDefs;

// type Auth {
//     token: ID!        ID has an unique identifier, in this case is the token
//     student: Student  Refers to student profile
// }