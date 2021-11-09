import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import CreateUser from './Components/CreateUser';

import './App.css';
import ListOfUsers from './Components/ListOfUsers';
import UpdatePassword from "./Components/UpdatePassword";

const App = () => {
    const client = new ApolloClient({
        uri: 'http://localhost:3001/graphql',
        cache: new InMemoryCache(),
    });

    return (
        <ApolloProvider client={client}>
            <CreateUser />
            <ListOfUsers />
            <UpdatePassword />
        </ApolloProvider>
    );
};

export default App;
