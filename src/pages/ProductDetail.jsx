import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const endpoint = "https://fakestoreapi.com/products/";

function ProductDetail() {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState();

  function fetchProductSingle() {
    axios
      .get(endpoint + id)
      .then((response) => setSingleProduct(response.data));
  }

  useEffect(fetchProductSingle, []);
  console.log(singleProduct);

  return (
    <section className="product-detail">
      {singleProduct ? (
        <div className="product-card">
          <h6 className="title-product">{singleProduct.title}</h6>
          <p className="price-product">{`${singleProduct.price} $ `}</p>
          <img
            src={singleProduct.image}
            alt={singleProduct.title}
            className="image-product"
          />
          <p className="description-product">{singleProduct.description}</p>
          <p className="category-product">{singleProduct.category}</p>
        </div>
      ) : (
        <p>errore</p>
      )}
    </section>
  );
}

export default ProductDetail;
