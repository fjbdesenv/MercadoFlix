import {EconomicCalendar, ColorTheme} from 'react-ts-tradingview-widgets';

import "./Calendar.css"

interface params{
    colorTeheme:ColorTheme
}

export default function Calendar ({colorTeheme='dark'}:params):JSX.Element{

    /* Disponivel em https://www.tradingview.com/widget/symbol-overview/ */

    return(
        <div className='container-calendar'>
            <EconomicCalendar
                colorTheme={colorTeheme}
                autosize={true}
                locale='br'
                height={'600px'}
            />
        </div>
        
    );
}