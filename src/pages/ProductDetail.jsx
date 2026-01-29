import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductDetailCard from "../components/ProductDetailCard";
import { SpinningCircles } from "react-loading-icons";

const endpoint = "https://fakestoreapi.com/products/";

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

  useEffect(fetchProductSingle, [id]);
  console.log(singleProduct);

  return (
    <section className="product-detail">
      {singleProduct ? (
        <ProductDetailCard singleProduct={singleProduct} />
      ) : (
        <SpinningCircles />
      )}
    </section>
  );
}

export default ProductDetail;
