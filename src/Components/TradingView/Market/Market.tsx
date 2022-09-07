import {MarketData} from 'react-ts-tradingview-widgets';
import './Market.css';

export default function Market ():JSX.Element {
    return(
        <MarketData colorTheme='dark' locale='br'/>
    );
} 