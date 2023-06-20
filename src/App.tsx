import { useState } from "react";
import "./App.css";
import ProductPage from "./ProductPage";

export interface Product {
  id: number;
  name: string;
}

function App() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "bob",
    },
    {
      id: 2,
      name: "shaun",
    },
  ]);

  const handleClick = (id: number) => {
    console.log(id);
  };

  return (
    <h1>
      {products.map((products, i) => (
        <div key={i}>
          <ProductPage product={products} handleClick={handleClick} />
        </div>
      ))}
    </h1>
  );
}

export default App;
