import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

const rootElement = document.getElementById('root');

const router = (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      {/* Add other routes here as needed */}
    </Routes>
  </HashRouter>
);

createRoot(rootElement).render(
  <StrictMode>
    {router}
  </StrictMode>,
);
