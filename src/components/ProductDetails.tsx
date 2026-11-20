import { Link, useParams } from 'react-router-dom';
import { products } from '../data/products';

export function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <section className="detail-not-found" aria-labelledby="not-found-heading">
        <h2 id="not-found-heading">Product not found</h2>
        <p>We couldn’t find a product with that ID.</p>
        <Link to="/products">Back to all products</Link>
      </section>
    );
  }

  return (
    <section className="product-detail" aria-labelledby="detail-name">
      <Link className="back-link" to="/products">
        ← Back to products
      </Link>
      <div className={`detail-art product-art ${product.color}`} aria-hidden="true">
        <span>{product.initials}</span>
      </div>
      <div className="detail-copy">
        <p className="product-category">{product.category}</p>
        <h2 id="detail-name">{product.name}</h2>
        <p className="detail-price">${product.price.toFixed(2)}</p>
        <p className="detail-description">
          A thoughtfully selected {product.category.toLowerCase()} essential, designed to bring
          lasting usefulness and a little more ease to your everyday.
        </p>
      </div>
    </section>
  );
}
