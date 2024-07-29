import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Turn as Hamburger } from "hamburger-react";
import HeaderCSS from "../css/Header.module.css";
import { linksData } from "../linksData";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pageNames = Object.keys(linksData);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className={HeaderCSS.container}>
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <h1 style={{ fontWeight: "800" }}>Links</h1>
      </Link>
      <div className={HeaderCSS.hamburger}>
        <Hamburger toggled={menuOpen} toggle={setMenuOpen} />
      </div>
      <nav className={`${HeaderCSS.nav} ${menuOpen ? HeaderCSS.navOpen : ""}`}>
        <ul>
          {pageNames.map((pageName, index) => (
            <li key={index}>
              <Link
                to={index === 0 ? "/" : `/${pageName.toLowerCase()}`}
                onClick={handleLinkClick}
              >
                {pageName}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
