import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderCSS from "../css/Header.module.css";
import { linksData } from "../linksData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

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

  return (
    <div className={HeaderCSS.container}>
      <div
        className={HeaderCSS.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <FontAwesomeIcon icon={faXmark} size="xl" />
        ) : (
          <span className={HeaderCSS.menuText}>Menu</span>
        )}
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
