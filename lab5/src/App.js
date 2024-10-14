import React from 'react';
import ProductCard from './ProductCard';

function App() {
  return (
    <div className="App" style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh' }}>
      <main style={{ padding: '20px', textAlign: 'center' }}>
        <ProductCard
          productName="Iphone 20"
          productPrice={9999}
          productDescription="A cutting-edge smartphone with all the latest features."
        />
        <ProductCard
          productName="Macbook Pro 2030"
          productPrice={99999}
          productDescription="A high-performance laptop designed for professionals."
        />
        <ProductCard
          productName="Airpods PRO 5th Generation"
          productPrice={999}
          productDescription="Crystal-clear audio quality with noise cancellation."
        />
      </main>
    </div>
  );
}

export default App;

