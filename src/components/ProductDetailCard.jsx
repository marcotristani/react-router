import { Link } from "react-router-dom";
function ProductDetailCard({ singleProduct }) {
  const { title, price, category, image, description } = singleProduct;
  return (
    <div className="product-card">
      <h6 className="title-product">{title}</h6>
      <p className="price-product">{`${price} $ `}</p>
      <img src={image} alt={title} className="image-product" />
      <p className="description-product">{description}</p>
      <p className="category-product">{category}</p>
      <Link to={"/products_list"}>Torna al listato</Link>
    </div>
  );
}

export default ProductDetailCard;
