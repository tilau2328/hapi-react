import ApolloClient, { createNetworkInterface } from 'apollo-client';

const config = { networkInterface: createNetworkInterface({ uri: '/graphql' }) };

const client = new ApolloClient(config);

export default client;
