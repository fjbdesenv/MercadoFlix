import React from 'react';
import { PageFound } from '../../Pages';
import {Header, Footer} from '../components';

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <PageFound/>
      <Footer />
    </div>
  );
}

export default App;
