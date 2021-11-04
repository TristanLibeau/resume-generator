import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!, $email: String!) {
    addUser(username: $username, password: $password, email: $email) {
      token
      user {
        username
        _id
        email
      }
    }
  }
`;

export const SAVE_RESUME = gql`
  mutation saveResume($resumeData: Resume!) {
    saveResume(resumeData: $resumeData) {
      firstname
      lastname
      currentrole
      address1
      address2
      phone
      email
      textValue
      position
      compagny
      from
      to
      description
      school
      address
      degree
      focus
      createdBy
    }
  }
`;