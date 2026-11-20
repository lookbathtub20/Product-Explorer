import './App.css';
import { ProductList } from './components/ProductList';

export function App() {
  return (
    <main className="page-shell">
      <header className="page-header">
        <p className="eyebrow">THE EVERYDAY EDIT</p>
        <h1>Find your next favorite.</h1>
        <p className="intro">A considered collection of useful, well-made things.</p>
      </header>
      <ProductList />
    </main>
  );
}
