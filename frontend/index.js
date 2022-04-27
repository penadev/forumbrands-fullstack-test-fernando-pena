import React, {useState, useEffect, useCallback} from 'react';
import ReactDOM from 'react-dom';
import HomeDashboard from './Components/HomeDashboard';
import Header from './Components/Header';
import './main.scss';

const Home = () => {
  return <>
    <Header />
    <HomeDashboard />
    <div className="signature">Fernando Pena</div>
  </>
};

ReactDOM.render(
  <Home />,
  document.getElementById('root')
);
