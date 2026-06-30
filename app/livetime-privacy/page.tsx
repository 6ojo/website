import Link from "next/link";
import { Navigation } from "../components/nav";

export const metadata = {
	title: "Privacy Policy",
	description: "Privacy policy for LiveTime",
};

export default function PrivacyPolicy() {
	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex flex-col items-center min-h-screen px-4 pt-24 pb-16 mx-auto sm:pt-32">
				<div className="w-full max-w-2xl">
					<header className="mb-10 text-center">
						<h1 className="text-4xl font-bold tracking-tight text-zinc-100 font-display sm:text-5xl">
							LiveTime - Privacy Policy
						</h1>
						<p className="mt-4 text-sm text-zinc-500">
							Effective date: June 30, 2026
						</p>
					</header>

					<article className="prose prose-invert prose-zinc max-w-none prose-headings:font-display prose-headings:text-zinc-100 prose-a:text-zinc-100 prose-a:underline prose-a:underline-offset-4 prose-strong:text-zinc-200">
						<p>
							LiveTime ("the app") is a world-clock app that shows a timezone
							in your status bar. This policy explains what data the app
							handles. The short version:{" "}
							<strong>
								LiveTime does not collect, transmit, or share any personal
								data. It is an entirely offline app.
							</strong>
						</p>

						<h2>Data we collect</h2>
						<p>
							<strong>None.</strong> LiveTime has no accounts, no analytics, no
							advertising, and no third-party SDKs. The app does not make
							network requests to any server we control.
						</p>

						<h2>Data stored on your device</h2>
						<p>
							The app saves your preferences - your selected timezone and your
							appearance/behavior settings (theme, color, 12/24-hour, etc.) -{" "}
							<strong>locally on your device only</strong>, using Android's
							standard on-device storage. This information never leaves your
							device and is removed when you uninstall the app.
						</p>

						<h2>Permissions and why they're used</h2>
						<ul>
							<li>
								<strong>Notifications (POST_NOTIFICATIONS):</strong> to show the
								clock in your status bar / notification shade.
							</li>
							<li>
								<strong>
									Foreground service (FOREGROUND_SERVICE,
									FOREGROUND_SERVICE_SPECIAL_USE):
								</strong>{" "}
								to keep the displayed time current while the clock is active.
							</li>
							<li>
								<strong>Run after restart (RECEIVE_BOOT_COMPLETED):</strong> to
								bring the clock back after you reboot, if it was active before.
							</li>
						</ul>
						<p>
							None of these permissions are used to collect or transmit
							personal information.
						</p>

						<h2>Links to third parties</h2>
						<p>
							The app may open external links you tap yourself - for example, a
							donation link, which opens in your browser. Those third-party
							sites have their own privacy policies; this policy does not cover
							them.
						</p>

						<h2>Children's privacy</h2>
						<p>
							LiveTime is suitable for all ages and does not knowingly collect
							any data from anyone, including children.
						</p>

						<h2>Changes to this policy</h2>
						<p>
							If this policy changes, the updated version will be posted at this
							same URL with a new effective date.
						</p>

						<h2>Contact</h2>
						<p>
							Questions about this policy? Contact:{" "}
							<a href="mailto:me@gojo.one">
								<strong>me@gojo.one</strong>
							</a>
						</p>
					</article>

					<div className="mt-12 text-center">
						<Link
							href="/"
							className="text-sm underline duration-500 text-zinc-500 hover:text-zinc-300"
						>
							go home
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
