import React from "react";
import LinkStyle from "../css/LinkComponent.module.css";
// import LightArrow from "../assets/LightArrow.svg";
import DarkArrow from "../assets/DarkArrow.svg";

function LinkComponent() {
  return (
    <div>
      <button className={LinkStyle.btn}>
        LINK
        <img src={DarkArrow} alt="Arrow" className={LinkStyle.arrowIcon} />
      </button>
    </div>
  );
}

export default LinkComponent;
