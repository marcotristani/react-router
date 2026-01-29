import { use } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ProductDetailCard({ singleProduct }) {
  const { id, title, price, category, image, description } = singleProduct;
  const [currentId, setCurrentId] = useState(id);
  const navigate = useNavigate();

  useEffect(() => navigate(`/products_list/${currentId}`), [currentId]);

  return (
    <div className="product-card">
      <h6 className="title-product">{title}</h6>
      <p className="price-product">{`${price} $ `}</p>
      <img src={image} alt={title} className="image-product" />
      <p className="description-product">{description}</p>
      <p className="category-product">{category}</p>
      <Link to={"/products_list"}>Torna al listato</Link>
      {currentId > 1 && (
        <button
          onClick={() => {
            setCurrentId(currentId - 1);
          }}
        >
          precedente
        </button>
      )}
      {currentId < 20 && (
        <button
          onClick={() => {
            setCurrentId(currentId + 1);
          }}
        >
          successivo
        </button>
      )}
    </div>
  );
}

export default ProductDetailCard;
