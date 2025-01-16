import React from "react";
import CheckoutCounter from "./CheckoutCounter";

function App() {
  const [products, setProducts] = React.useState([
    { id: 1, name: "Apple", price: 0.5, quantity: 10 },
    { id: 2, name: "Banana", price: 0.3, quantity: 5 },
    { id: 3, name: "Cherry", price: 0.1, quantity: 1 },
  ]);

  return (
    <div className="main">
      <h1>Checkout Counter</h1>
      {products.map((product) => (<>
        {product.name} - ${product.price.toFixed(2)} per item
        <CheckoutCounter
          key={product.id}
          defaultCount={product.quantity}
          onDeleteClick={() =>
            setProducts((products) =>
              products.filter((p) => p.id !== product.id)
            )
          }
        />
      </>))}
    </div>
  );
}

export default App;
