import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import store from './store/store'


//To render a React element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  //StrictMode is a tool for highlighting potential problems in an application. Like Fragment, 
  // StrictMode does not render any visible UI. It activates additional checks and warnings for its descendants.
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

