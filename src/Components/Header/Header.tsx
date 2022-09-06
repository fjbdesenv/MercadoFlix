import React from 'react';
import {MenuItem} from '../components';

import "./Header.css";

function Header() {
    return (
        <header>
            <nav id='menu'>
                <div id='logo'>MercadoFlix</div>

                <MenuItem name='Home' link='#'/>
                <MenuItem name='Agenda' link='#'/>
                <MenuItem name='Sites Económicos' link='#'/>
                <MenuItem name='Cotaçoes' link='#'/>
            </nav>
        </header>
    );
}

export default Header;