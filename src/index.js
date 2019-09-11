import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers';
import './index.css';
import App from './containers/App/App';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'https://staging-crowdhound-be.herokuapp.com/graphql',
});


export const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
          <App /> 
      </BrowserRouter>
    </Provider>
  </ApolloProvider>
  , 

  document.getElementById('root'));

