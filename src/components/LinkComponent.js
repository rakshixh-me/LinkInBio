import React from "react";
import styles from "../css/LinkComponent.module.css";

const LinkComponent = ({ title, url }) => {
  return (
    <a href={url} className={styles.link}>
      {title}
    </a>
  );
};

export default LinkComponent;
