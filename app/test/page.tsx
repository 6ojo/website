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


			<div className="my-16 text-center">
				<h1 className="text-sm text-zinc-600 ">
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
				</h1>
				</div>
		</div>
	);
}
