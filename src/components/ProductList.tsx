import { useState } from 'react';
import { Product, ProductCard } from './ProductCard';

const products: Product[] = [
  {
    id: 1,
    name: 'Studio Headphones',
    category: 'Electronics',
    price: 89,
    color: 'art-lilac',
    initials: 'SH',
  },
  {
    id: 2,
    name: 'Everyday Tote',
    category: 'Accessories',
    price: 38,
    color: 'art-peach',
    initials: 'ET',
  },
  {
    id: 3,
    name: 'Ceramic Pour-over',
    category: 'Home',
    price: 46,
    color: 'art-sage',
    initials: 'CP',
  },
  {
    id: 4,
    name: 'Field Notes Set',
    category: 'Stationery',
    price: 18,
    color: 'art-yellow',
    initials: 'FN',
  },
  {
    id: 5,
    name: 'Cloud Knit Throw',
    category: 'Home',
    price: 112,
    color: 'art-blue',
    initials: 'CK',
  },
  {
    id: 6,
    name: 'Arc Desk Lamp',
    category: 'Lighting',
    price: 74,
    color: 'art-rose',
    initials: 'AL',
  },
];

export function ProductList() {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All categories');
  const categories = Array.from(new Set(products.map((product) => product.category))).sort();
  const visibleProducts = products.filter((product) => {
    const matchesName = product.name.toLowerCase().includes(searchText.trim().toLowerCase());
    const matchesCategory =
      selectedCategory === 'All categories' || product.category === selectedCategory;

    return matchesName && matchesCategory;
  });

  return (
    <section aria-label="Products" className="product-section">
      <div className="section-heading">
        <h2>Our picks</h2>
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
