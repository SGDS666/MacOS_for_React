import 'core-js'
import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Screen from './Screen';
import reportWebVitals from './reportWebVitals';
import { RecoilRoot } from 'recoil';

  // window.addEventListener('mousemove',(e)=>{
  //   console.log(e);
    
  // })



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
localStorage.removeItem('zindex')
root.render(
  <RecoilRoot>
    <Screen />
  </RecoilRoot>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
