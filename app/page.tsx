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
					MT_z12b: { time_format: "12hours:minutes:secondsA" },
				});
			}
		};

		return () => {
			document.body.removeChild(script);
		};
	}, []);

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
				quantity={500}
			/>
			<h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
				gojo.one
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 font-display " />
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-sm text-zinc-500 ">
					hiya, im gojo :3
					<br /> look up there for more info about me
					<br /> and where i hide 
					<br /> <br />
					{" "}
					<Link
						target="_blank"
						href="https://github.com/6ojo/website"
						className="underline duration-500 hover:text-zinc-300"
					>				
						open source
					</Link>
				</h2>
			</div>

			{/* Time Widget Section */}
			<div className="mt-10 text-center">
				<a
					href="https://time.is/MT"
					id="time_is_link"
					rel="nofollow"
					style={{ fontSize: "24px" }}
				>
					Time in Mountain Time:
				</a>
				<span
					id="MT_z12b"
					style={{ fontSize: "24px" }}
				></span>
			</div>
		</div>
	);
}