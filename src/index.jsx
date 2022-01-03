import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { BrowserRouter,Routes,Route } from "react-router-dom";

import App from './App';
import Stores from './routes/Stores'
import Contact from './routes/Contact'
import Shoes from './routes/Shoes'
import Bags from './routes/Bags';


const rootElement = document.getElementById("root");
render( 
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/stores' element={<Stores/>}/>
        <Route path='/shoes' element={<Shoes/>}/>
        <Route path='/bags' element={<Bags/>}/>
        <Route path='/contact' element={<Contact/>}/>
        
    </Routes>
    </BrowserRouter>,
  rootElement);