import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import {Provider} from './StoreContext';
import { Provider } from 'react-redux'
import SamuraiJSApp from './App';


ReactDOM.render(
    <SamuraiJSApp /> , document.getElementById('root'));



serviceWorker.unregister();
