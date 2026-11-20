import { Link, useParams } from 'react-router-dom';
import { products } from '../data/products';
import { formatPrice } from '../utils/formatPrice';

export function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <section>
        <h2>Product not found</h2>
        <p>We couldn't find a product with that ID.</p>
        <Link to="/products">Back to all products</Link>
      </section>
    );
  }

  return (
    <section>
      <Link to="/products">Back to products</Link>
      <h2>{product.name}</h2>
      <p>Category: {product.category}</p>
      <p>Price: {formatPrice(product.price)}</p>
    </section>
  );
}
