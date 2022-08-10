import React from "react";
import { Route, Routes  } from 'react-router-dom';
 
import Home from './components/home';
import About from './components/about';
import Shop from './components/shop';
import Error from './components/error';

export  default function App(){
  return (
    
    <>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/about" element={<About/>} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/404" element={<Error />} />
      </Routes>
    </>
  )
}