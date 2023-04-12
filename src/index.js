import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import App from './App';
import Contact from './pages/contact';
import Newme from './pages/newme';
import Awesome from './pages/awesome';
import Layout from './pages/Layout';

export default function Always(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='newme' element={<Newme/>}/>
          <Route path='awesome' element={<Awesome/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <Always />
  </ChakraProvider>
    
);
