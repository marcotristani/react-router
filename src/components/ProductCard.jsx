function ProductCard({ product }) {
  const { id, title, price, description, category, image } = product;
  return (
    <div className="product-card">
      <h6 className="title-product">{title}</h6>
      <p className="price-product">{`${price} $ `}</p>
      <img src={image} alt={title} className="image-product" />
      <p className="description-product">{description}</p>
      <p className="category-product">{category}</p>
    </div>
  );
}

export default ProductCard;
