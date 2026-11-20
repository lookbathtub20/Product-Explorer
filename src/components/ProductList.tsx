import { useMemo, useState } from 'react';
import { ProductCard } from './ProductCard';
import { products } from '../data/products';

export function ProductList() {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All categories');
  const categories = Array.from(new Set(products.map((product) => product.category))).sort();
  const visibleProducts = useMemo(() => {
    const normalizedSearch = searchText.trim().toLowerCase();

    return products.filter((product) => {
      const matchesName = product.name.toLowerCase().includes(normalizedSearch);
      const matchesCategory =
        selectedCategory === 'All categories' || product.category === selectedCategory;

      return matchesName && matchesCategory;
    });
  }, [searchText, selectedCategory]);

  return (
    <section aria-label="Products" className="product-section">
      <div className="section-heading">
        <span>
          {visibleProducts.length} {visibleProducts.length === 1 ? 'essential' : 'essentials'}
        </span>
      </div>
      <div className="product-controls">
        <label className="search-control">
          <span>Search products</span>
          <input
            type="search"
            placeholder="Try “headphones”"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />
        </label>
        <label className="category-control">
          <span>Category</span>
          <select
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
          >
            <option>All categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
      </div>
      {visibleProducts.length > 0 ? (
        <div className="product-grid">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="empty-state">No products match your search. Try another name or category.</p>
      )}
    </section>
  );
}
