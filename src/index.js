import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter  } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import 'bootstrap/dist/css/bootstrap.css';

let rootAtr = document.getElementById('root');
let root = ReactDOM.createRoot(rootAtr);
rootAtr.setAttribute('data-mode', localStorage.getItem('mode'));

root.render(
  
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// Если вы хотите начать измерять производительность своего приложения, передайте функцию
// для протоколирования результатов (например: reportWebVitals(console.log))
// или отправить в конечную точку аналитики. Узнайте больше: https://bit.ly/CRA-vitals
reportWebVitals();
