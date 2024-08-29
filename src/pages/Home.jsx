import React from "react";
import { linksData } from "../linksData";
import Link from "../components/LinkComponent";
import HomeCSS from "../css/Home.module.css";

function Home() {
  const profileImageSrc = linksData.profileImage;
  console.log(profileImageSrc);
  return (
    <div>
      <header>
        <h1>{linksData.logo}</h1>
      </header>
      <main>
        {profileImageSrc &&
          profileImageSrc !== "Please Provide Profile Image" && (
            <img src={profileImageSrc} alt="Profile" className="img" />
          )}
        <h2>{linksData.name}</h2>
        <h3>{linksData.designation}</h3>
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
