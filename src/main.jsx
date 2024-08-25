import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import HighlightedCarsPage from './pages/HighlightedCarsPage.jsx';
import './index.css';

const rootElement = document.getElementById('root');

const router = (
  <HashRouter basename="/">
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/highlighted" element={<HighlightedCarsPage />} />
    </Routes>
  </HashRouter>
);

createRoot(rootElement).render(
  <StrictMode>
    {router}
  </StrictMode>,
);


