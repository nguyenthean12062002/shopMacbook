import React from "react";
import { MdSearch, MdAccountCircle } from "react-icons/md";
import { GrView } from "react-icons/gr";

import { NavLink, Link } from "react-router-dom";
import CustomRoute from "../Component/CustomRoute/CustomRoute";
import Button from "../Component/Button/button";
import Cart from "../Component/Cart/cart";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      {/* header-main */}
      <div className="header-main">
        <div className="header-logo">
          {/* <LogoByAn /> */}
          <img
            className="logo__img"
            src="https://www.edigitalagency.com.au/wp-content/uploads/apple-logo-png-black-900x1106.png"
            alt="logo"
          />
        </div>
        {/*category  */}
        <div className="header-category">
          <NavLink className="category-items" exact="true" to="/">
            Home
          </NavLink>
          <NavLink className="category-items" to="/about">
            About
          </NavLink>
          <NavLink className="category-items" to="/store">
            Store
          </NavLink>
        </div>
        {/* header-action */}
        <div className="header-action">
          <div className="action">
            <MdAccountCircle className="action-icon"></MdAccountCircle>
            <div className="action-sub">
              <h4 className="title">Account</h4>
              <span >Login </span>/<span> Singin Up</span>
            </div>
            <div className="modul-action">
              <Button small hover>
                <CustomRoute classname="action__item" to="/login">
                  Login
                </CustomRoute>
              </Button>
              <p className="horizontalline"></p>
              <Button small hover>
                <CustomRoute classname="action__item">Singin Up</CustomRoute>
              </Button>
            </div>
          </div>
          {/* cart */}
          <Cart hover></Cart>
        </div>
      </div>
    </header>
  );
}

export default Header;
