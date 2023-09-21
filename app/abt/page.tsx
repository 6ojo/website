import Link from "next/link";
import React from "react";
import Particles from "app/components/particles";
const imageUrl = "https://media.discordapp.net/attachments/1010995350624014407/1154260384555999262/gojo.png?width=670&height=670"


export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<Particles
				className="absolute inset-0 -z-10"
				quantity={500}
			/>

			<img 
				src={imageUrl}
				width="335"
				height="335"
			/>
			<div className="my-16 text-center">
				<h1 className="z-10 text-4xl text-zinc-500 text-transparent cursor-default bg-white whitespace-nowrap bg-clip-text font-display"
					style={{color: "#ffffff"}}
				>
					im gojo and i want to be your friend
				</h1>

				<h2 className="text-2xl text-zinc-500"
				style={{color: "#ffffff"}}
				>
					thanks for visiting my site <br /> i like cats, records, and being silly on the interweb
				
				</h2>
				<h3 className="text-xl text-zinc-500">	
				<br />
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
{/* <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
				about
			</h1> */}