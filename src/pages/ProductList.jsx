import { useState, useEffect } from "react";
import axios from "axios";

import NavBar from "../components/NavBar";
import { use } from "react";

const endpoint = "https://fakestoreapi.com/products";

function ProductList() {
  const [productsList, setProductsList] = useState([]);

  function fetchProductsList() {
    axios.get(endpoint).then((response) => setProductsList(response.data));
  }

  useEffect(fetchProductsList, []);

  return (
    <section className="products-container">
      {productsList.map((product) => {
        const { id, title, price, description, category, image } = product;
        return (
          <div key={id} className="product-card">
            <h6>{title}</h6>
            <p>{price}</p>
            <img src={image} alt={title} />
            <p>{description}</p>
            <p>{category}</p>
          </div>
        );
      })}
    </section>
  );
}

export default ProductList;
