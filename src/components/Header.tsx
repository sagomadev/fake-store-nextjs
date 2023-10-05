export default function Header() {
  return (
    <header className="flex items-center justify-between w-full h-16 px-24 bg-gray-100">
      <h1>My Fake Store</h1>
      <nav>
        <ul className="flex items-center justify-between space-x-8">
          <li>Home</li>
          <li>Products</li>
          <li>Cart</li>
        </ul>
      </nav>
    </header>
  );
}
