import { useState, useEffect } from "react";
import axios from "axios";

import ProductCard from "../components/ProductCard";

const endpoint = "https://fakestoreapi.com/products";

function ProductList() {
  const [productsList, setProductsList] = useState([]);

  // function fetchProductsList() {
  //   axios.get(endpoint).then((response) => setProductsList(response.data));
  // }

  useEffect(() => {
    axios.get(endpoint).then((response) => setProductsList(response.data));
  }, []);

  return (
    <section className="products-container">
      {productsList.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}

export default ProductList;
