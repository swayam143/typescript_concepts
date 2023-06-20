import { Product } from "./App";

// Define the type of the product prop
interface ProductProps {
  product: Product;
  handleClick(id: number): void;
}

const ProductPage = ({ product, handleClick }: ProductProps) => {
  return (
    <div>
      {product.name}

      <button onClick={() => handleClick(product.id)}>{product.id}</button>
    </div>
  );
};

export default ProductPage;
