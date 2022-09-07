import {Link} from 'react-router-dom';

import './MenuItem.css';

interface paramets{
    name: string
    link: string
}

export default function MenuItem({name, link}: paramets):JSX.Element  {
    return( 
        <Link className='menu-item' to={'/' + link}>
            {name}
        </Link>
    );
}