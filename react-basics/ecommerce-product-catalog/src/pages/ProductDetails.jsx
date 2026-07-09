import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../context/CartContext";

function ProductDetails() {

  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const {addToCart} = useContext(CartContext)

  useEffect(() => {

    axios

      .get(
        `https://fakestoreapi.com/products/${id}`
      )

      .then((response) => {

        setProduct(response.data);

      });

  }, [id]);

  if (!product) {

    return <h2>Loading...</h2>;

  }

  return (

    <div className="details">

      <img
        src={product.image}
        alt={product.title}
      />

      <div>

        <h1>{product.title}</h1>

        <h2>₹{product.price}</h2>

        <p>{product.category}</p>

        <p>{product.description}</p>

        <button onClick={()=> addToCart(product)}>
          Add To Cart
        </button>

      </div>

    </div>

  );

}

export default ProductDetails;