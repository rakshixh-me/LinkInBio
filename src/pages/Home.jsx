import React, { useEffect, useState } from "react";
import LinkComponent from "../components/LinkComponent";
import styles from "../css/Home.module.css";
import linksData from "../links.json";

const HomePage = () => {
  const [pages, setPages] = useState([]);
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    setPages(Object.values(linksData));
  }, []);

  const handlePageClick = (index) => {
    setActivePage(index);
  };

  return (
    <div className={styles.homePage}>
      <nav className={styles.navbar}>
        {pages.map((page, pageIndex) => (
          <button
            key={pageIndex}
            className={`${styles.navButton} ${
              activePage === pageIndex ? styles.active : ""
            }`}
            onClick={() => handlePageClick(pageIndex)}
          >
            {page.title}
          </button>
        ))}
      </nav>
      <div className={styles.linksContainer}>
        {pages[activePage]?.links.map((link, linkIndex) => (
          <LinkComponent
            key={linkIndex}
            linktitle={link.linktitle}
            url={link.url}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
