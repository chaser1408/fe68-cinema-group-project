/* eslint-disable jsx-a11y/anchor-is-valid */
import Carousel from "components/Carousel/Carousel";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.scss"
export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-light bg-light header__content">
          <a className="navbar-brand" href="#">
            Cinema Booking
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/theater">
                  Theater
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/review">
                  Review
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/LoginUser">
                  <button type="button" className="">
                    dn
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div>
        </div> 
<Carousel/>
      </div>

    );
  }
}
