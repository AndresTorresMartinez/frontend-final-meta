import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
    <div className="navbar">
      <img src="logoI.svg" alt="" className="logo" />
      <ul className="nav-list">
        <li>
          <Link to="/">Homepage</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/reservation">Reserve</Link>
        </li>
      </ul>
    </div>
    </>
  );
};

export default Nav;
