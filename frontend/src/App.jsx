import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      title: "Wireless Headphones",
      price: "$79.99",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    },
    {
      id: 2,
      title: "Gaming Mouse",
      price: "$39.99",
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
    },
    {
      id: 3,
      title: "Smart Watch",
      price: "$149.99",
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500",
    },
    {
      id: 4,
      title: "Laptop Stand",
      price: "$29.99",
      image:
        "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=500",
    },
    {
      id: 5,
      title: "Mechanical Keyboard",
      price: "$89.99",
      image:
        "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500",
    },
    {
      id: 6,
      title: "Bluetooth Speaker",
      price: "$59.99",
      image:
        "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500",
    },
  ];

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">ADITYA'S WEBSITE</div>

        <div className="search-box">
          <input type="text" placeholder="Search Amazon" />
          <button>🔍</button>
        </div>

        <div className="nav-links">
          <div>
            <span>Hello, Sign in</span>
            <h4>Account</h4>
          </div>

          <div>
            <span>Returns</span>
            <h4>& Orders</h4>
          </div>

          <div className="cart">
            🛒 <span>Cart</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to ADITYA'S WEBSITE</h1>
        <p>Best Deals on Electronics, Fashion & More</p>
      </section>

      {/* Products */}
      <section className="products-section">
        <h2>Top Picks For You</h2>

        <div className="products-grid">
          {products.map((product) => (
            <div className="card" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <h3>MY WEBSITE</h3>
        <p>© 2026 All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;