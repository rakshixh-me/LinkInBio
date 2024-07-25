import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cross as Hamburger } from "hamburger-react";
import HeaderCSS from "../css/Header.module.css";
import { linksData, title } from "../linksData";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    setPages(Object.keys(linksData));
  }, []);

  const handleLinkClick = (page) => {
    setMenuOpen(false);
    localStorage.setItem("currentpage", page);
    window.dispatchEvent(new Event("storage"));
  };

  const handleTitleClick = () => {
    const firstPageKey = Object.keys(linksData)[0];
    localStorage.setItem("currentpage", firstPageKey);
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div className={HeaderCSS.container}>
      <Link
        to="/"
        style={{ textDecoration: "none", color: "white" }}
        onClick={handleTitleClick}
      >
        <h1 style={{ fontWeight: "800" }}>{title}</h1>
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
