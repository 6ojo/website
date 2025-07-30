import Link from "next/link";
import React from "react";
import Particles from "app/components/particles";
import "./style.css";

const imageUrl =
  "https://github.com/6ojo/website/blob/main/public/gojo.png?raw=true";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div className="container">
        <Particles className="particles" quantity={500} />

        <img src={imageUrl} alt="gojo profile picture a white and purple g and j on a black circle background," className="logo" />

        <div className="content my-16 text-center font-display ">
          <h1 className="title "> im gojo and i want to be your friend</h1>

          <h2 className="text-sm text-zinc-500 ">
            thanks for visiting my site. <br /> i like cats, records, and being silly on the interweb. <br /> (the name isnt from jjk)
          </h2>

          <h3 className="link text-sm text-zinc-500 ">
            <Link target="_self" href="https://www.gojo.one" className="underline duration-500 hover:text-zinc-300">
              go home
            </Link>
            <span className="text-zinc600 mx-4"></span>
            <a
              href="mailto:me@gojo.one" className="underline duration-500 hover:text-zinc-300"
            >
              email me!
              </a>
          </h3>
        </div>
      </div>
    </div>
  );
}
