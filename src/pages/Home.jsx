import React, { useState, useEffect } from "react";
import LinkComponent from "../components/LinkComponent";
import NavBar from "../components/Header";
import styles from "../css/Home.module.css";
import { linksData } from "../linksData";

const Home = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const currentPage = localStorage.getItem("currentpage");
    let linksToSet;

    if (currentPage && linksData[currentPage]) {
      linksToSet = linksData[currentPage];
    } else {
      const firstPageKey = Object.keys(linksData)[0];
      linksToSet = linksData[firstPageKey];
    }

    setLinks(linksToSet);
  }, []);

  return (
    <div className={styles.homePage}>
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
