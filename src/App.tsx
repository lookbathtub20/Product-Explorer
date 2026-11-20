import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { ProductDetails } from './components/ProductDetails';
import { ProductList } from './components/ProductList';
import { products } from './data/products';

function DocumentTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/products') {
      document.title = 'Products | The Everyday Edit';
      return;
    }

    const productId = Number(pathname.split('/').pop());
    const product = products.find((item) => item.id === productId);
    document.title = product
      ? `${product.name} | The Everyday Edit`
      : 'Product not found | The Everyday Edit';
  }, [pathname]);

  return null;
}

export function App() {
  return (
    <BrowserRouter>
      <DocumentTitle />
      <main>
        <header>
          <h1>Product Explorer</h1>
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
