import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      <h1>dettaglio prodotto</h1>
    </section>
  );
}

export default ProductDetail;
