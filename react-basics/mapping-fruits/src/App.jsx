function App() {

  const products = [

    {
      id: 1,
      name: "Laptop",
      price: 50000
    },

    {
      id: 2,
      name: "Mouse",
      price: 500
    }

  ];

  return (

    <div>

      {
        products.map((product) => (

          <div key={product.id}>

            <h2>
              {product.name}
            </h2>

            <p>
              ₹{product.price}
            </p>

          </div>

        ))
      }

    </div>

  );
}

export default App;