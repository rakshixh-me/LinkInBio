import React, { useEffect, useState } from "react";
import LinkComponent from "../components/LinkComponent";
import styles from "../css/Home.module.css";
import linksData from "../links.json";

const Home = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    setLinks(linksData);
  }, []);

  return (
    <div className={styles.homePage}>
      <h1 className={styles.title}>My Links</h1>
      <div className={styles.linksContainer}>
        {links.map((link, index) => (
          <LinkComponent key={index} title={link.title} url={link.url} />
        ))}
      </div>
    </div>
  );
};

export default Home;
