import React from 'react';
import {MenuItem} from '../components';
import {Link} from 'react-router-dom';

import "./Header.css";

function Header() {
    return (
        <header>
            <nav id='menu'>
                <Link id='logo' to='MercadoFlix/home' >MercadoFlix</Link>

                <MenuItem name='Home' link='MercadoFlix/home'/>
                <MenuItem name='Agenda' link='MercadoFlix/agenda'/>
                <MenuItem name='Sites Economicos' link='MercadoFlix/economicssites'/>
                <MenuItem name='Cotaçoes' link='MercadoFlix/cotacoes'/>
            </nav>
        </header>
    );
}

export default Header;