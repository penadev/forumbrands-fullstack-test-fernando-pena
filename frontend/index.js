import React, {useState, useEffect, useCallback} from 'react';
import ReactDOM from 'react-dom';
import HomeDashboard from './Components/HomeDashboard';
import Navigation from './Components/Navigation';
import './main.scss';

const Home = () => {
  return <>
    <Navigation />
    <HomeDashboard />
  </>
};

ReactDOM.render(
  <Home />,
  document.getElementById('root')
);
