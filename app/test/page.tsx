import Link from "next/link";
import React from "react";
import Particles from "app/components/particles";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<Particles
				className="absolute inset-0 -z-10"
				quantity={500}
			/>

			{/* <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
				about
			</h1> */}
			<div className="my-16 text-center">
				<h2 className="z-10 text-4xl text-zinc-500 duration-1000 text-transparent cursor-default bg-white text-edge-outline whitespace-nowrap bg-clip-text">
					im gojo and i want to be your friend {" "}
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
				</h2>
				<h3 className="text-xl text-zinc-500 ">	
					{" "}
					<Link
						target="_blank"
						href="https://www.gojo.one"
						className="underline duration-500 hover:text-zinc-300"
					>				
						go home
					</Link>
					</h3>
				</div>
		</div>
	);
}