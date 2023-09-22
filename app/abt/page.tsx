import Link from "next/link";
import React from "react";
import Particles from "app/components/particles";
import "./home.css"; //

const imageUrl =
  "https://media.discordapp.net/attachments/1010995350624014407/1154260384555999262/gojo.png?width=670&height=670";

export default function Home() {
  return (
    <div className="container flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Particles className="particles" quantity={500} />

      <img src={imageUrl} alt="gojo" className="logo" />

      <div className="content">
        <h1 className="title">
			im gojo and i want to be your friend
		</h1>

        <h2 className="subtitle">
        	thanks for visiting <br />
		 	i like cats, records, and being silly on the interweb.
        </h2>

        <h3 className="link">
          <Link target="_blank" 
		  href="https://www.gojo.one" 
		  className="underline">
            go Home
          </Link>
        </h3>
      </div>
    </div>
  );
}
