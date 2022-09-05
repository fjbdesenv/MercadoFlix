import React from 'react';

import './MenuItem.css';

function MenuItem ({name = 'Nome', link=''}) {
    return(
        <li> 
            <a href={link}>
                {name}
            </a>
        </li>
    );
}

export default MenuItem;