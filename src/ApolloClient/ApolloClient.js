import ApolloClient from 'apollo-client';
import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

const wsLink = new WebSocketLink({
    uri: 'ws://localhost:3000/graphql',
    options: {
        reconnect: true,
        connectionParams: {
            authtoken: localStorage.getItem('token'),
        },
    },
});
const httpLink = new HttpLink({
    uri: 'http://localhost:3000/graphql',
});


const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token') || '""';
    // return the headers to the context so httpLink can read them

    return {
        headers: {
            ...headers,
            'auth-token': JSON.parse(token),
        },
    };
});


const link = split(
    ({ query }) => {
        const { kind, operation } = getMainDefinition(query);
        return kind === 'OperationDefinition' && operation === 'subscription';
    },
    wsLink,
    authLink.concat(httpLink),
);

const client = new ApolloClient({
    cache: new InMemoryCache(), //
    link: authLink.concat(link),
});

export default client;
