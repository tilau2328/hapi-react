import ApolloClient, { createNetworkInterface } from 'apollo-client';

//const config = { networkInterface: createNetworkInterface({ uri: 'http://localhost:8000/grahql' }) }

const client = new ApolloClient();

export default client;
