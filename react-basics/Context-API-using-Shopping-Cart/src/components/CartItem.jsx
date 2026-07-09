import { useContext } from "react";

import {

CartContext

}

from "../context/CartContext";

function CartItem({

item

}){

const{

cart,

setCart

}

=

useContext(CartContext);

function increase(){

const updated=

cart.map(

(product)=>

product.id===item.id

?

{

...product,

quantity:

product.quantity+1

}

:

product

);

setCart(updated);

}

function decrease(){

if(item.quantity===1){

remove();

return;

}

const updated=

cart.map(

(product)=>

product.id===item.id

?

{

...product,

quantity:

product.quantity-1

}

:

product

);

setCart(updated);

}

function remove(){

const updated=

cart.filter(

(product)=>

product.id!==item.id

);

setCart(updated);

}

return(

<div className="cart-item">

<h3>

{item.name}

</h3>

<p>

₹

{item.price}

</p>

<p>

Qty :

{item.quantity}

</p>

<button

onClick={increase}

>

+

</button>

<button

onClick={decrease}

>

-

</button>

<button

onClick={remove}

>

Remove

</button>

</div>

)

}

export default CartItem;