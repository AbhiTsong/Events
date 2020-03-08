import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import store from "./Redux/store";
import { ApolloProvider } from '@apollo/react-hooks';
import client from './ApolloClient/ApolloClient';

ReactDOM.render(
 <ApolloProvider client = {client}>
 <Provider store = {store}>
  <ToastContainer/>
   <BrowserRouter>
      <App />
   </BrowserRouter>
 </Provider>
 </ApolloProvider>
 , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
