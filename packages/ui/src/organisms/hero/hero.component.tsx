import type React from "react";

type Props = {};

export const Hero: React.FC<Props> = () => {
	return (
		<div className="bg-white pb-6 sm:pb-8 lg:pb-12">
			<div className="mx-auto max-w-screen-2xl px-4 md:px-8">
				<header className="mb-8 flex items-center justify-between py-4 md:mb-12 md:py-8 xl:mb-16">
					<a
						href="/"
						className="inline-flex items-center gap-2.5 font-bold text-2xl text-black md:text-3xl"
						aria-label="logo"
					>
						<svg
							width="95"
							height="94"
							viewBox="0 0 95 94"
							className="h-auto w-6 text-indigo-500"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>sample</title>
							<path d="M96 0V47L48 94H0V47L48 0H96Z" />
						</svg>
						OneMan's
					</a>

					<nav className="hidden gap-12 lg:flex">
						<a href="/" className="font-semibold text-indigo-500 text-lg">
							Home
						</a>
						<a
							href="/"
							className="font-semibold text-gray-600 text-lg transition duration-100 hover:text-indigo-500 active:text-indigo-700"
						>
							Portfolio
						</a>
						<a
							href="/"
							className="font-semibold text-gray-600 text-lg transition duration-100 hover:text-indigo-500 active:text-indigo-700"
						>
							Blogs
						</a>
						<a
							href="/"
							className="font-semibold text-gray-600 text-lg transition duration-100 hover:text-indigo-500 active:text-indigo-700"
						>
							About
						</a>
					</nav>

					<a
						href="/"
						className="hidden rounded-lg bg-gray-200 px-8 py-3 text-center font-semibold text-gray-500 text-sm outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block"
					>
						Contact Sales
					</a>

					<button
						type="button"
						className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 font-semibold text-gray-500 text-sm ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<title>sample</title>
							<path
								fill-rule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clip-rule="evenodd"
							/>
						</svg>
						Menu
					</button>
				</header>

				<section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
					<div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
						<p className="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">
							Very proud to introduce
						</p>

						<h1 className="mb-8 font-bold text-4xl text-black sm:text-5xl md:mb-12 md:text-6xl">
							Revolutionary way to build the web
						</h1>

						<p className="mb-8 text-gray-500 leading-relaxed md:mb-12 lg:w-4/5 xl:text-lg">
							This is a section of some simple filler text, also known as
							placeholder text. It shares some characteristics of a real written
							text but is random.
						</p>

						<div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
							<a
								href="/"
								className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center font-semibold text-sm text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
							>
								Start now
							</a>

							<a
								href="/"
								className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center font-semibold text-gray-500 text-sm outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
							>
								Take tour
							</a>
						</div>
					</div>

					<div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
						<img
							src="https://images.unsplash.com/photo-1618004912476-29818d81ae2e?auto=format&q=75&fit=crop&w=1000"
							loading="lazy"
							alt="by Fakurian Design"
							className="h-full w-full object-cover object-center"
						/>
					</div>
				</section>
			</div>
		</div>
	);
};
