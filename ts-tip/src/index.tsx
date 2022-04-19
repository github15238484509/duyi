import React from 'react';
import ReactDOM from 'react-dom/client';
import { Classtype } from './component/tip/enum';
import TipItem from './component/tip/tipItem';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TipItem type={Classtype.none} onClick={() => {
      console.log(5545);
    }}></TipItem>
    <TipItem type={Classtype.black} onClick={() => {
      console.log(5545);
    }}></TipItem>
    <TipItem type={Classtype.red} onClick={() => {
      console.log(5545);
    }}></TipItem>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
