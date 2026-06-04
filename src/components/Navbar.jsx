export function Navbar() {
  return (
    <nav className="navbar">
      <h1 style={{ color: "purple" }}>Gamers Shop</h1>

      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Categories</li>
        <li>Contact</li>
      </ul>

      <button>🛒 Cart</button>
    </nav>
  );
}

