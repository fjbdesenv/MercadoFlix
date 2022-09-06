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
            <Route path=''  element={<Home/>}/>
            <Route path='home' element={<Home/>}/>
            <Route path='agenda' element={<TimeLine/>}/>
            <Route path='cotacoes' element={<Prices/>}/>
            <Route path='economicssites' element={<EconomicsSites/>}/>
            <Route path='*' element={<PageFound/>}/>
          </Routes>
          
          <Footer />
        </BrowserRouter>    
    </div>
  );
}

export default App;
