import React from 'react';
import {MenuItem} from '../components';
import {Link} from 'react-router-dom';

import "./Header.css";

function Header() {
    return (
        <header>
            <nav id='menu'>
                <Link id='logo' to='home' >MercadoFlix</Link>

                <MenuItem name='Home' link='home'/>
                <MenuItem name='Agenda' link='agenda'/>
                <MenuItem name='EconomicsSites' link='economicssites'/>
                <MenuItem name='Cotaçoes' link='cotacoes'/>
            </nav>
        </header>
    );
}

export default Header;