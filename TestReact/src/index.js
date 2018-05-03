// Code React
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './index.css';

render(
    //Affiche la class App dans la div avec l'id root du DOM
    <App />, document.getElementById('root')
)