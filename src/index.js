import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import './CSS/NewTypist.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './context/Scroll'
import App from './App';


ReactDOM.render(<Router>
    <ScrollToTop />
    <App />
</Router>, 
document.getElementById('root'));
