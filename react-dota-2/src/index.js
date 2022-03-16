import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './components/Redux/redux-store'
import {Provider} from "react-redux"
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en','fr','ru'],
    fallbackLng: "en",
    detection: {
      order: [ 'path', 'localStorage','cookie', 'htmlTag','subdomain'],
      caches: ['localStorage']
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json'
    },
  })

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Suspense>
    <React.StrictMode>
          <BrowserRouter>
            <Provider store={store}>
                <App /> 
            </Provider>
          </BrowserRouter>
      </React.StrictMode>
  </Suspense>);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
