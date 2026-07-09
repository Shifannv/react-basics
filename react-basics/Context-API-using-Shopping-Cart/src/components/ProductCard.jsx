import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {

const { cart, setCart } =

useContext(CartContext);

function addToCart(){

const exists=

cart.find(

(item)=>

item.id===product.id

);

if(exists){

const updated=

cart.map((item)=>

item.id===product.id

?

{

...item,

quantity:item.quantity+1

}

:

item

);

setCart(updated);

}

else{

setCart([

...cart,

{

...product,

quantity:1

}

]);

}

}

return(

<div className="card">

<h2>{product.name}</h2>

<p>

₹{product.price}

</p>

<button

onClick={addToCart}

>

Add To Cart

</button>

</div>

)

}

export default ProductCard;