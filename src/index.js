import React from 'react';
import ReactDOM from 'react-dom/client';
import { Memo } from './components/Memo';
import { CallBack } from './components/CallBack';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Memo />
    <CallBack />
  </>

);
