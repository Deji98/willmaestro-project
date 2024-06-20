import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Sharedlayout from './Pages/Sharedlayout';
import About from './Pages/About';
import Partner from './Pages/Partner';
import Error from './Pages/Error';
import Services from './Pages/Services';

function App() {
  return (
    <div>
      <BrowserRouter>
  <Routes>
        <Route path='/' element={<Sharedlayout />}>
        <Route index element={<Home />} />
        <Route path='About' element={<About />} />
        <Route path='Partner' element={<Partner />} />
        <Route path='Services' element={<Services />} />
        </Route>
        <Route path='*' element={<Error />} />
  </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

