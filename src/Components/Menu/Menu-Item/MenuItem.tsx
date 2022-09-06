import React from 'react';

import './MenuItem.css';

function MenuItem ({name = 'Nome', link=''}) {
    return( 
        <a className='menu-item' href={link}>
            {name}
        </a>
    );
}

export default MenuItem;