import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Routes from './routes'
//Just a test
function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <Routes></Routes>
    </BrowserRouter>
  );
}

export default App;  
