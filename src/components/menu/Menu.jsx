import './menu.css';

function Menu() {
  return (
    <div className="menu ">
      <img src="src\images\logo.svg" alt="logo do site" className="logo" />

      <nav>
        <ul className="menu-options">
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Categories</li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
