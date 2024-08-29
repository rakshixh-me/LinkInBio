import React from "react";
import LinkStyle from "../css/LinkComponent.module.css";
import { styleData } from "../linksData";
import LightArrow from "../assets/LightArrow.svg";
import DarkArrow from "../assets/DarkArrow.svg";

function LinkComponent({
  linkText = "LINK",
  linkUrl = "#",
  linkBtn = " Outline",
}) {
  return (
    <div>
      {linkBtn === "Outline" ? (
        <a href={linkUrl} className={LinkStyle.aBtn}>
          <button
            className={LinkStyle.btn}
            style={{
              backgroundColor:
                styleData.OutlineButtonStyle.buttonBackgroundColor ||
                "transparent",
              color: styleData.OutlineButtonStyle.buttonTextColor || "#0A0A0A",
              border: `1px solid ${
                styleData.OutlineButtonStyle.buttonBorderColor || "#0A0A0A"
              }`,
            }}
          >
            {linkText}
            <img src={DarkArrow} alt="Arrow" className={LinkStyle.arrowIcon} />
          </button>
        </a>
      ) : (
        <a href={linkUrl} className={LinkStyle.aBtn}>
          <button
            className={LinkStyle.btn}
            style={{
              backgroundColor:
                styleData.FilledButtonStyle.buttonBackgroundColor || "#0A0A0A",
              color: styleData.FilledButtonStyle.buttonTextColor || "#EBEBE3",
              border: "none",
            }}
          >
            {linkText}
            <img src={LightArrow} alt="Arrow" className={LinkStyle.arrowIcon} />
          </button>
        </a>
      )}
    </div>
  );
}

export default LinkComponent;
