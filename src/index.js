import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
//import serviceWorker from './serviceWorker';
import registerServiceWorker from './registerServiceWorker';

import 'font-awesome/css/font-awesome.min.css'; 


ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
