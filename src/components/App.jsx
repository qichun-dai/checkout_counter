import React from "react";
import CheckoutCounter from "./CheckoutCounter";

function App() {
  const [products, setProducts] = React.useState([
    { id: 1, name: "Apple", price: 2.5, quantity: 99 },
    { id: 2, name: "Banana", price: 1.3, quantity: 5 },
    { id: 3, name: "Cherry", price: 5.1, quantity: 1 },
  ]);

  return (
    <div className="main">
      <h1>Shopping Cart</h1>
      {products.map((product) => (
        <CheckoutCounter
          key={product.id}
          defaultCount={product.quantity}
          onDeleteClick={() =>
            setProducts((products) =>
              products.filter((p) => p.id !== product.id)
            )
          }
        />
      ))}
    </div>
  );
}

export default App;
