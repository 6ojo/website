"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import Particles from "./components/particles";

const navigation = [
	{ name: "contact", href: "/contact" },
	{ name: "about me", href: "/abt" },
	{ name: "extra links", href: "/more" },
];

export default function Home() {
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "//widget.time.is/t.js";
		script.async = true;
		document.body.appendChild(script);

		script.onload = () => {
			if (window.time_is_widget) {
				window.time_is_widget.init({
					Flagstaff_z16c: { time_format: "hours:minutes" },
				});
			}
		};

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return (
		<div className="flex flex-col items-center justify-between w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={500}
			/>
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

			<div className="flex flex-col items-center"> 
				{/* contains gojo.one and little texts */}
				<div className="flex flex-col items-center">
					<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
					<h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
						gojo.one
					</h1>
					<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 font-display " />
				</div>

				<div className="mt-4 text-center animate-fade-in">
					<h2 className="text-sm text-zinc-500 ">
						hiya, im gojo :3
						<br /> look up there for more info about me
						<br /> and where i hide
						<br /> <br />{" "}
						<Link
							target="_blank"
							href="https://github.com/6ojo/website"
							className="underline duration-500 hover:text-zinc-300"
						>
							open source
						</Link>
						<br />
						analytics anonymously collected by
						<Link
							target="_self"
							href="https://cloud.umami.is/share/tp6ZDMQMXjEI9g09/gojo.one"
							className="underline duration-500 hover:text-zinc-300"
						>
							umami
						</Link>
					</h2>
				</div>
			</div>
{			/* clock is its own div  */}
			<div className="mb-16 text-center animate-fade-in">
				<div className="font-display text-zinc-500">
					<a
						href="https://time.is/Flagstaff"
						id="time_is_link"
						rel="nofollow"
						style={{ fontSize: "24px" }}
					>
						my time:
					</a>
					<span id="Flagstaff_z16c" style={{ fontSize: "24px" }}></span>
				</div>
			</div>
		</div>
	);
}