import Link from "next/link";
import React from "react";
import Particles from "app/components/particles";

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
				</ul>
			</nav>
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={100}
			/>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-sm text-zinc-500 ">
					example of what id say about myself {" "}
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
					{" "}
					<Link
						target="_blank"
						href="https://www.gojo.one"
						className="underline duration-500 hover:text-zinc-300"
					>				
						go home
					</Link>
				</h2>
			</div>
		</div>
	);
}
