import React from 'react';
import CardImg from '../../Components/Card/CardImg/CardImg';
import TitlePage from '../../Components/TitlePage/TitlePage';

import "./EconomicsSites.css";

function EconomicsSites() {
    return (
        <>
            <TitlePage title='Sites Económicos' />
            <div className="container-sites">
                <CardImg imgURL='https://play-lh.googleusercontent.com/PtGnZ8RC6lSuMnluahDx5wORkirBaLTSOW1a35UqT0oatdPUTKNw8FlzwLggGZIdQg' link='https://br.investing.com/' name='Investing'/>
                <CardImg imgURL='https://static.tradingview.com/static/images/logo-preview.png' link='https://br.tradingview.com/news/'  name='tradingview'/>
                <CardImg imgURL='https://inteligenciafinanceira.com.br/wp-content/uploads/2021/09/Calhau_QuemSomos.jpg' link='https://inteligenciafinanceira.com.br/saiba/?utm_source=google&utm_medium=search&utm_campaign=gl-midia_paga-institucional-trafego-canalif_instituc&utm_content=google-2nd-cpc-all_devices-keyword-generico-paid_search-responsivo_saiba-ga6444774803&dclid=' name='Inteligência Financeira'/>
            </div>
        </>
    );
}

export default EconomicsSites;