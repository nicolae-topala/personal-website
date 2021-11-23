import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import { AboutPage } from 'pages/About/AboutPage';
import { ContactPage } from 'pages/Contact/ContactPage';
import './styles/index.scss';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/About' element={<AboutPage/>}/>
      <Route path='/Contact' element={<ContactPage/>}/>
      <Route path='/' element={<Navigate to='/About'/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
