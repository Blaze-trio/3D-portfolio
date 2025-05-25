import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App';
const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
}