import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/formatPrice';

export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
};

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article>
      <h3>
        <Link to={`/products/${product.id}`}>{product.name}</Link>
      </h3>
      <p>Category: {product.category}</p>
      <p>Price: {formatPrice(product.price)}</p>
    </article>
  );
}
