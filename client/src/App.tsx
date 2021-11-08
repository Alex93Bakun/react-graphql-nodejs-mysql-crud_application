import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import CreateUser from './Components/CreateUser';

import './App.css';
import ListOfUsers from './Components/ListOfUsers';

const App = () => {
    const client = new ApolloClient({
        uri: 'http://localhost:3001/graphql',
        cache: new InMemoryCache(),
    });

    return (
        <ApolloProvider client={client}>
            <CreateUser />
            <ListOfUsers />
        </ApolloProvider>
    );
};

export default App;
