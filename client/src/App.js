import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import { setContext } from '@apollo/client/link/context';
import { ApolloClient } from "@apollo/client";
import {
  InMemoryCache,
  // ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import Main from "./components/Main";
import Header from "./components/Header";
import './App.css';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// const client = new ApolloClient({
//   request: (operation) => {
//     const token = localStorage.getItem("id_token");

//     operation.setContext({
//       headers: {
//         authorization: token ? `Bearer ${token}` : "",
//       },
//     });
//   },
//   uri: "/graphql",
// });

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  uri: "http://localhost:3001/",
});

function App() {
  return (
    <ApolloProvider client={client}>
  
    <div className="App">
      <Router>
        <Header />
      </Router> 
        <Main />
    </div>
    </ApolloProvider>
  );
}

export default App;
