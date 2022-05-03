// Write your JS code here

import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="header-nav-img">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
        alt="website logo"
        className="header-nxt-img"
      />
      <Link to="/log-out">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
          className="header-logout-img"
        />
      </Link>
    </div>
    <div className="list-container">
      <div className="nav-img-container">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
            className="header-home-img"
          />
        </Link>
        <Link to="/products">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
            className="header-home-img"
          />
        </Link>
        <Link to="/cart">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
            className="header-home-img"
          />
        </Link>
      </div>
      <div className="nav-header-names">
        <Link to="/" className="link-style">
          <li className="header-names">Home</li>
        </Link>
        <Link to="/products" className="link-style">
          <li className="header-names">Products</li>
        </Link>
        <Link to="/cart" className="link-style">
          <li className="header-names">Cart</li>
        </Link>
        <Link to="/log-out">
          <button type="button" className="log-out-button">
            Log out
          </button>
        </Link>
      </div>
    </div>
  </div>
)

export default Header
