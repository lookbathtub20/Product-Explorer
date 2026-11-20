import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/formatPrice';

export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  color: string;
  initials: string;
};

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">
      <Link className="product-link" to={`/products/${product.id}`}>
        <div className={`product-art ${product.color}`} aria-hidden="true">
          <span>{product.initials}</span>
        </div>
        <div className="product-info">
          <div>
            <p className="product-category">{product.category}</p>
            <h2>{product.name}</h2>
          </div>
          <p className="product-price">{formatPrice(product.price)}</p>
        </div>
      </Link>
    </article>
  );
}
