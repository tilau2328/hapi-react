import ApolloClient, { createNetworkInterface } from 'apollo-client';

const networkInterface = createNetworkInterface({ uri: 'http://localhost:8000/graphql' });

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) { req.options.headers = {}; }

    const token = localStorage.getItem('token');
    req.options.headers.authorization = token ? token : null;
    next();
  }
}]);

const config = { networkInterface: networkInterface };

const client = new ApolloClient(config);

export default client;
