const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
        password: String
        resume: Resume
    }

    type Resume {
        firstname: String
        lastname: String
        currentrole: String
        address1: String
        address2: String
        phone: String
        email: String
        textValue: String
        position: String
        company: String
        from: String
        to: String
        description: String
        school: String
        address: String
        degree: String
        focus: String
        createdBy: User

    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        user(username: String!): User
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveResume(resumeData: Resume!): User 
        
    }  
`;

module.exports = typeDefs;