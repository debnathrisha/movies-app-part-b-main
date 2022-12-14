import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './screens/home/Home'
import Details from './screens/details/Details'
import Header from './common/header/Header';
import { BrowserRouter, Routes, Route,} from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename = "/movies-app-part-b-main">
      <Header   btnType="bookshowbtn" buttonName="BOOK SHOW"/>
      <Routes>
        <Route path='/movies-app-part-b-main'   element={<Home  />} />
        <Route path='details'  element={<Details />} />
      </Routes>
    </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
