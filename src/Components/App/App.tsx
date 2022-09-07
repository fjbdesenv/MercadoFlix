import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { EconomicsSites, Home, PageFound, Prices, TimeLine } from '../../Pages';
import {Header, Footer} from '../components';

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header />
          
          <Routes>
            <Route path='MercadoFlix/'  element={<Home/>}/>
            <Route path='MercadoFlix/home' element={<Home/>}/>
            <Route path='MercadoFlix/agenda' element={<TimeLine/>}/>
            <Route path='MercadoFlix/cotacoes' element={<Prices/>}/>
            <Route path='MercadoFlix/economicssites' element={<EconomicsSites/>}/>
            <Route path='*' element={<PageFound/>}/>
          </Routes>
          
          <Footer />
        </BrowserRouter>    
    </div>
  );
}

export default App;
