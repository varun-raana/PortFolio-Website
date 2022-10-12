function About() {
	return (
		<div className="w-full mb-20">
			<h1 className="text-gray-800 capitalize font-black text-xl mb-8 w-fit flex items-center">
				<span>about</span>
				<span className="border-b-2 border-gray-800 ml-2">me</span>
				<span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-4 h-4 inline-block ml-2">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
						/>
					</svg>
				</span>
			</h1>

			<div className="h-full w-full max-w-3xl">
				<div className="h-full">
					<p className="text-base text-gray-700 capitalize font-medium tracking-wide mb-4 first-letter:text-3xl">
						hello!, my name is varun rana and i am a{" "}
						<span className="text-orange-600 bg-black px-2 skew-y-12">
							self taught full stack web developer.
						</span>{" "}
						i love and eager to learn new web technologies and trying to create new
						things with them. my interest in{" "}
						<span className="text-orange-600 bg-black px-2 skew-y-12">
							web development
						</span>{" "}
						started back in 2020.
					</p>
					<p className="mt-3 text-base text-gray-700 capitalize font-medium tracking-wide">
						i have recently completed my web development internship with{" "}
						<a
							href="http://botmaticsolution.com"
							target={"_blank"}
							rel="noreferrer"
							className="text-orange-600 bg-black px-2 skew-y-12 relative">
							Botmatic Soutions pvt ltd.
						</a>
						&nbsp;pune, maharashtra.
					</p>
				</div>
			</div>
		</div>
	);
}

export default About;
