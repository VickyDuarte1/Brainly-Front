import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider}  from 'react-redux';
import {store} from './Redux/store'
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store ={store}>
    <GoogleOAuthProvider clientId="560086254467-d79pb5fmh6ciud2v2qmm3b338nterco3.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>
  </Provider>   

);


