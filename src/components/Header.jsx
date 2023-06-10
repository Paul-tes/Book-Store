import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/" className="bs-cms">Bookstore CMS</Link></li>
        <li><Link to="books">BOOKS</Link></li>
        <li><Link to="categories">CATEGORIES</Link></li>
      </ul>
      <div className="user-profile"><i className="fa-solid fa-user user-icon" /></div>
    </nav>
  </header>
);

export default Header;
