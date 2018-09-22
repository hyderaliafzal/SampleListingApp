import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {
  ApolloProvider,
} from 'react-apollo';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset';
import store from "./redux/store";
import { Provider } from 'react-redux';

const link = new HttpLink({ uri: 'https://etmdb.com/graphql' });
const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client} >
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>, document.getElementById('root'));
registerServiceWorker();
