import React, { useState, useEffect } from "react";
import LinkComponent from "../components/LinkComponent";
import NavBar from "../components/Header";
import Loader from "../components/Loader";
import styles from "../css/Home.module.css";
import { linksData } from "../linksData";

const Home = () => {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(false);

  const updateLinks = () => {
    const currentPage = localStorage.getItem("currentpage");
    let linksToSet;

    if (currentPage && linksData[currentPage]) {
      linksToSet = linksData[currentPage];
    } else {
      const firstPageKey = Object.keys(linksData)[0];
      linksToSet = linksData[firstPageKey];
    }

    setLinks(linksToSet);
  };

  useEffect(() => {
    updateLinks();

    const handleStorageChange = () => {
      setLoading(true);
      setTimeout(() => {
        updateLinks();
        setLoading(false);
      }, 500);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className={styles.homePage}>
      {loading && <Loader />}
      <NavBar />
      <div className={styles.linksContainer}>
        {links.map((link, index) => (
          <LinkComponent
            key={index}
            linktitle={link.linktitle}
            url={link.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
