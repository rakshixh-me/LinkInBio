import React from "react";
import { linksData } from "../linksData";
import Profile from "../assets/profile.jpg";
import Link from "../components/LinkComponent";

function Home() {
  return (
    <div>
      <header>
        <h1>{linksData.logo}</h1>
      </header>
      <main>
        <img src={Profile} alt="Profile" className="img" />
        <h2>{linksData.name}</h2>
        <h3>{linksData.designation}</h3>
        <div>
          <Link />
        </div>
      </main>
    </div>
  );
}

export default Home;
