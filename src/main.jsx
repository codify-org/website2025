import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

console.log('Script starting');
const root = document.getElementById('root');
console.log('Root element:', root);

try {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log('Render completed');
} catch (error) {
  console.error('Render failed:', error);
}