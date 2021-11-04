import { gql } from "@apollo/client";

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      resume
    }
  }
`;

export const GET_RESUME = gql`
  {
    
  }
 `  