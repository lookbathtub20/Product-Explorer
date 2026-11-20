import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ProductDetails } from './components/ProductDetails';
import { ProductList } from './components/ProductList';

export function App() {
  return (
    <BrowserRouter>
      <main className="page-shell">
        <header className="page-header">
          <p className="eyebrow">THE EVERYDAY EDIT</p>
          <h1>Find your next favorite.</h1>
          <p className="intro">A considered collection of useful, well-made things.</p>
        </header>
        <Routes>
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="*" element={<Navigate to="/products" replace />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
