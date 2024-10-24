import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './main.css';

import App from './App';
import { CartProvider } from './contexts/cart';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <CartProvider>
        <App />
      </CartProvider>
    </StrictMode>
  );
}
