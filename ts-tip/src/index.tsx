import React from 'react';
import ReactDOM from 'react-dom/client';
import { BoardComp } from './component/tip/boardComp';
import { Classtype } from './component/tip/enum';
import { GameComp } from './component/tip/gameComp';
import TipItem, { TipType } from './component/tip/tipItem';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <GameComp></GameComp>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
