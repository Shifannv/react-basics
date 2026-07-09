import { Link } from "react-router-dom";

function ProductCard({ product }) {

  return (

    <Link
      to={`/product/${product.id}`}
      className="product-link"
    >

      <div className="card">

        <img
          src={product.image}
          alt={product.title}
        />

        <h3>{product.title}</h3>

        <p className="price">
          ₹{product.price}
        </p>

        <p>{product.category}</p>

      </div>

    </Link>

  );

}

export default ProductCard;