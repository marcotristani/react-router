import { Link } from "react-router-dom";
function ProductCard({ product }) {
  const { id, title, price, category, image } = product;
  return (
    <div className="product-card">
      <h6 className="title-product">{title}</h6>
      <p className="price-product">{`${price} $ `}</p>
      <img src={image} alt={title} className="image-product" />
      <p className="category-product">{category}</p>
      <Link to={`/product_list/${id}`}>vai al dettaglio</Link>
    </div>
  );
}

export default ProductCard;
