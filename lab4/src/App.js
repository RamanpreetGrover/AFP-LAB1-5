import React from 'react';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="App" style={{ backgroundColor: 'white', color: 'black', minHeight: '100vh' }}>
      <Header />
      <main style={{ padding: '150px', textAlign: 'center' }}>
        <p>This is the main content area of the app. Enjoy exploring React!</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
