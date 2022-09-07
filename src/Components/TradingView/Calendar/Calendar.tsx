import React from 'react';
import {EconomicCalendar, ColorTheme} from 'react-ts-tradingview-widgets';

import "./Calendar.css"

interface params{
    colorTeheme:ColorTheme
}

function Calendar ({colorTeheme='dark'}:params){

    /* Disponivel em https://www.tradingview.com/widget/symbol-overview/ */

    return(
        <div className='containe-calendar'>
            <EconomicCalendar
                colorTheme={colorTeheme}
                autosize={true}
                locale='br'
                height={'600px'}
            />
        </div>
        
    );
}

export default Calendar;