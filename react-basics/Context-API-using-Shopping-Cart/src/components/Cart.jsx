import { useContext } from "react";

import { CartContext }

from "../context/CartContext";

import CartItem from "./CartItem";

function Cart(){

const{cart}=

useContext(CartContext);

const totalPrice=

cart.reduce(

(total,item)=>

total+

item.price*

item.quantity

,

0

);

const totalItems=

cart.reduce(

(total,item)=>

total+

item.quantity

,

0

);

return(

<div>

<h2>

Cart

</h2>

{

cart.map((item)=>(

<CartItem

key={item.id}

item={item}

/>

))

}

<h3>

Total Items :

{totalItems}

</h3>

<h3>

Total Price :

₹{totalPrice}

</h3>

</div>

)

}

export default Cart;