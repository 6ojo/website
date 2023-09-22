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

      <div className="content my-16 text-center ">
        <h1 className="title font-display"> im gojo and i want to be your friend</h1>

        <h2 className="subtitle my-16 text-center ">
          thanks for visiting my site. <br /> i like cats, records, and being silly on the interweb.
        </h2>

        <h3 className="link my-16 text-center ">
          <Link target="_self" href="https://www.gojo.one" className="underline">
            go home
          </Link>
        </h3>
      </div>
    </div>
  );
}
