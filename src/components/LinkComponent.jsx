import React from "react";
import styles from "../css/LinkComponent.module.css";

const LinkComponent = ({ linktitle, url }) => {
  return (
    <div className={styles.container}>
      <a href={url} className={styles.link}>
        {linktitle}
      </a>
    </div>
  );
};

export default LinkComponent;
