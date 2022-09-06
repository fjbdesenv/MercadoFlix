import React from 'react';

import {Link} from 'react-router-dom';

import './MenuItem.css';

interface paramets{
    name: string
    link: string
}

function MenuItem({name, link}: paramets)  {
    return( 
        <Link className='menu-item' to={'/' + link}>
            {name}
        </Link>
    );
}

export default MenuItem;