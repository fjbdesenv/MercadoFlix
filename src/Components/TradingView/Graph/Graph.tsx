import {MiniChart, DateRange, ColorTheme} from 'react-ts-tradingview-widgets'

import './Graph.css';

interface params{
    symbol:string, 
    colorTeheme:ColorTheme,
    dateRange:DateRange
}

export default function Graph ({symbol, dateRange = '1D', colorTeheme = 'dark'}:params):JSX.Element{

    /* Disponivel em https://www.tradingview.com/widget/symbol-overview/ */

    return(
        <MiniChart
            colorTheme={colorTeheme}
            autosize={true}
            symbol={symbol}
            dateRange={dateRange}
            locale='br'
        />
    );
}