import Link from "next/link";
import React from "react";
import Particles from "app/components/particles";
import "./style.css";

const imageUrl =
  "https://media.discordapp.net/attachments/1010995350624014407/1154260384555999262/gojo.png?width=670&height=670";

export default function Home() {
  return (
    <div className="container">
      <Particles className="particles" quantity={500} />

      <img src={imageUrl} alt="gojo profile picture a white and purple g and j on a black circle background," className="logo" />

      <div className="content font-display my-16 text-center animate-fade-in">
        <h1 className="title"> im gojo and i want to be your friend</h1>

        <h2 className="subtitle my-16 text-center animate-fade-in">
          thanks for visiting my site. <br /> i like cats, records, and being silly on the interweb.
        </h2>

        <h3 className="link my-16 text-center animate-fade-in">
          <Link target="_blank" href="https://www.gojo.one" className="underline">
            go home
          </Link>
        </h3>
      </div>
    </div>
  );
}
