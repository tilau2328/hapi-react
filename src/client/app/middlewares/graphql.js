import { applyMiddleware } from 'redux';
import client from '../graphql';

export default applyMiddleware(client.middleware());
