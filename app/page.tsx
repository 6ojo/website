import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { document } from 'document';

function setPageTitle(newTitle: string) {
	document.title = newTitle;
  }
  
  setPageTitle("gojo home");
  

const navigation = [
	{ name: "contact", href: "/contact" },
 { name: "extra links", href: "/more" },
	{ name: "projects", href: "/projects" },
];

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<nav className="my-16 animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={100}
			/>
			<h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
				gojo.one
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-sm text-zinc-500 ">
					hey, im gojo. i do things sometimes on my {" "}
					<Link
						target="_blank"
						href="https://github.com/6ojo"
						className="underline duration-500 hover:text-zinc-300"
					>
						github
					</Link>

					<br />
					and other {" "}
					<Link
						target="_blank"
						href="/contact"
						className="underline duration-500 hover:text-zinc-300"
					>
						places
					</Link>

					<br />
					<br />
					see the {" "}
					<Link
						target="_blank"
						href="https://github.com/chronark/chronark.com"
						className="underline duration-500 hover:text-zinc-300"
					>				
						original source code
					</Link>
				</h2>
			</div>
		</div>
	);
}
