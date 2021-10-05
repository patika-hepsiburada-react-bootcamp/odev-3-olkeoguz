import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { SurveyProvider } from './contexts/SurveyContext';

ReactDOM.render(
  <SurveyProvider>
    <App />
  </SurveyProvider>,
  document.getElementById('root')
);
