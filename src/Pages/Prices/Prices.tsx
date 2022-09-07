import TitlePage from "../../Components/TitlePage/TitlePage";
import Market from "../../Components/TradingView/Market/Market";

import "./Prices.css";

export default function Prices():JSX.Element {
    return (
        <section>
            <TitlePage title="Cotações"/>

            <Market/>

        </section>
    );
}