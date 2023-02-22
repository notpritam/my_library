import React from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import './navbar.scss'

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-head">
        <div className="container">
        <h1>TheBookShelf</h1>
        <div className="search">
        <BsSearch  className="s-icon"/>
          <input type="text" placeholder="Search" />
          
        </div>
        <button>Suggestions</button>
        </div>
      </div>

      <div className="nav-link">
        <a href="#" className="links">Home</a>
        <a href="" className="links">Bestseller</a>
        <a href="" className="links">Category</a>
        <a href="" className="links">Trending</a>
      </div>
    </div>
  );
}

export default Navbar;
