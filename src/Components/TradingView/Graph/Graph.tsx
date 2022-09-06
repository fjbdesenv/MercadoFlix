import React from 'react';
import {MiniChart, DateRange, ColorTheme} from 'react-ts-tradingview-widgets'

interface params{
    symbol:string, 
    colorTeheme:ColorTheme,
    dateRange:DateRange
}

function Graph ({symbol, dateRange = '1D', colorTeheme = 'dark'}:params){

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

export default Graph;