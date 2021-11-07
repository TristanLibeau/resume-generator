import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import  ApolloClient  from "apollo-boost";
import Main from "./components/Main";
import Header from "./components/Header";
import './App.css';

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "/graphql",
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
