import {MenuItem} from '../components';
import {Link} from 'react-router-dom';

import "./Header.css";

export default function Header():JSX.Element {
    return (
        <header>
            <nav id='menu'>
                <Link id='logo' to='MercadoFlix/home' >MercadoFlix</Link>

                <MenuItem name='Home' link='MercadoFlix/home'/>
                <MenuItem name='Calendário' link='MercadoFlix/calendario'/>
                <MenuItem name='Sites Economicos' link='MercadoFlix/economicssites'/>
                <MenuItem name='Cotaçoes' link='MercadoFlix/cotacoes'/>
            </nav>
        </header>
    );
}