import React from 'react';
import { Graph } from '../../Components/components';

import "./Home.css";

function Home() {
    return (
        <div className='container-content'>
            <Graph  symbol='IBOV' colorTeheme='dark' dateRange='1D'/>
            <Graph  symbol='ARS' colorTeheme='dark' dateRange='1D'/>
            <Graph  symbol='EUR' colorTeheme='dark' dateRange='1D'/>
            <Graph  symbol='BRL' colorTeheme='dark' dateRange='1D'/>
            <Graph  symbol='CAD' colorTeheme='dark' dateRange='1D'/>
            <Graph  symbol='AUD' colorTeheme='dark' dateRange='1D'/>
            <Graph  symbol='USD' colorTeheme='dark' dateRange='1D'/>
            <Graph  symbol='GBP' colorTeheme='dark' dateRange='1D'/>            
        </div>
    );
}

export default Home;