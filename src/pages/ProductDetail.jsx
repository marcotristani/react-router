import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductDetailCard from "../components/ProductDetailCard";

const endpoint = "https://fakestoreapi.com/products";

function ProductDetail() {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState();
  const navigate = useNavigate();

  function fetchProductSingle() {
    axios
      .get(endpoint + id)
      .then((response) => setSingleProduct(response.data))
      .catch((err) => {
        console.log(err);
        alert(`${err.message}`);
        navigate("/products_list");
      });
  }

  useEffect(fetchProductSingle, []);
  console.log(singleProduct);

  return (
    <section className="product-detail">
      {singleProduct ? (
        <ProductDetailCard singleProduct={singleProduct} />
      ) : (
        navigate("/error")
      )}
    </section>
  );
}

export default ProductDetail;
