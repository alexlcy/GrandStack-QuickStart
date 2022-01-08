import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import {createDriver, Neo4jProvider} from "use-neo4j";
const neo4j = require("neo4j-driver");


const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache()
})

const uri = "neo4j+s://57e076a1.databases.neo4j.io";
const user = "neo4j";
const password = "5Fd2gDVGIjr5p5dCcIgLEuqaUmqXOsjm87GPng-sHl0";
const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));


ReactDOM.render(
  
  <React.StrictMode>
    <Neo4jProvider driver={driver}>
      <ApolloProvider client={client}>
          <App />
      </ApolloProvider>
    </Neo4jProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
