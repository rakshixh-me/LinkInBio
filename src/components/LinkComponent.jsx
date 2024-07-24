import React from "react";
import styles from "../css/LinkComponent.module.css";

const LinkComponent = ({ linktitle, url }) => {
  return (
    <a href={url} className={styles.link}>
      {linktitle}
    </a>
  );
};

export default LinkComponent;
