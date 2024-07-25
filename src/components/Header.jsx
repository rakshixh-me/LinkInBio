import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Turn as Hamburger } from "hamburger-react";
import HeaderCSS from "../css/Header.module.css";
import { linksData } from "../linksData";
import Loader from "../components/Loader";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pages, setPages] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    setPages(Object.keys(linksData));
  }, []);

  const handleLinkClick = (page) => {
    setMenuOpen(false);
    localStorage.setItem("currentpage", page);

    // Show the loader and refresh the window
    setShowLoader(true);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  const handleTitleClick = () => {
    const firstPageKey = Object.keys(linksData)[0];
    localStorage.setItem("currentpage", firstPageKey);

    // Show the loader and refresh the window
    setShowLoader(true);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  return (
    <div className={HeaderCSS.container}>
      {showLoader && <Loader />}
      <Link
        to="/"
        style={{ textDecoration: "none", color: "white" }}
        onClick={handleTitleClick}
      >
        <h1 style={{ fontWeight: "800" }}>Links</h1>
      </Link>
      <div className={HeaderCSS.hamburger}>
        <Hamburger toggled={menuOpen} toggle={setMenuOpen} />
      </div>
      <nav className={`${HeaderCSS.nav} ${menuOpen ? HeaderCSS.navOpen : ""}`}>
        <ul>
          {pages.map((page, pageIndex) => (
            <li key={pageIndex}>
              <Link
                to={pageIndex === 0 ? "/" : `/${page}`}
                onClick={() => handleLinkClick(page)}
              >
                {page}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
