import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import firebase from 'firebase/compat/app';
//import { BrowserRouter } from 'react-router-dom';

console.log(firebase)

/*ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);  

