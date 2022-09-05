import React from 'react';
import {MenuItem} from '../components';

import "./Header.css";

function Header() {
    return (
        <header>

            <div id='logo'>MercadoFlix</div>

            <nav id='menu'>
                <ul>
                    <MenuItem name='Botão 1' link='https://www.google.com.br'/>
                    <MenuItem name='Botão 2' link='https://www.google.com.br'/>
                    <MenuItem name='Botão 3' link='https://www.google.com.br'/>
                    <MenuItem name='Botão 4' link='https://www.google.com.br'/>
                </ul>
            </nav>

        </header>
    );
}

export default Header;