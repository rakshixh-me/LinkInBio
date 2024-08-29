import React from "react";
import { linksData, styleData } from "../linksData";
import Link from "../components/LinkComponent";
import HomeCSS from "../css/Home.module.css";

function Home() {
  const profileImageSrc = linksData.profileImage;
  console.log(profileImageSrc);
  return (
    <div>
      <header>
        <h1 style={{ color: styleData.LogoColor || "#0A0A0A" }}>
          {linksData.logo}
        </h1>
      </header>
      <main>
        {profileImageSrc &&
          profileImageSrc !== "Please Provide Profile Image" && (
            <img
              src={profileImageSrc}
              alt="Profile"
              className="img"
              style={{
                borderRadius: styleData.ProfileImageBorderRadius || "0.75rem",
              }}
            />
          )}
        <h2 style={{ color: styleData.NameColor || "#0A0A0A" }}>
          {linksData.name}
        </h2>
        <h3 style={{ color: styleData.DesignationColor || "#0A0A0A" }}>
          {linksData.designation}
        </h3>
        <div className={HomeCSS.linkContainer}>
          {linksData.links.map((link, index) => (
            <Link
              key={index}
              linkText={link.linkText}
              linkUrl={link.linkUrl}
              linkBtn={link.linkBtn}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;
