import React from 'react';

import './TitlePage.css';

interface params{
    title:string
}

function TitlePage ({title}:params) {
    return(
        <div id='title-page' >
            {title}
        </div>
    );
}

export default TitlePage;