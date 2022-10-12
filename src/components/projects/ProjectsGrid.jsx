import { projects } from "../../data/Profile";

function ProjectsGrid() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10 px-4">
			{projects &&
				projects.length > 0 &&
				projects.map((item, index) => {
					return (
						<div
							key={index}
							className="w-full h-full flex flex-col p-4 pb-0 rounded-3xl overflow-hidden cursor-text border motion-safe:hover:drop-shadow-md bg-white">
							<div className="sm:h-56 h-48 mb-4 overflow-hidden rounded-3xl">
								<img
									src={item.projectImg}
									alt={item.name}
									className="h-full w-full object-fit block aspect-auto"
								/>
							</div>
							<div className="mt-auto">
								<a
									href={item.url}
									target={"_blank"}
									rel="noreferrer"
									className="inline-block tracking-wide text-lg md:text-2xl my-4 text-orange-600 capitalize">
									{item.name}
								</a>

								<div className="mt-4">
									<div className="flex flex-wrap gap-2">
										{item.skills &&
											item.skills.length > 0 &&
											item.skills.map((item, index) => {
												return (
													<span
														key={index}
														className="border border-gray-700 py-2 px-3 text-xs font-medium rounded-xl text-gray-800 cursor-pointer capitalize">
														{item}
													</span>
												);
											})}
									</div>
								</div>
								<div className="mt-5">
									<p className="text-xs md:text-base text-gray-700 capitalize tracking-wider">
										{item.desc}
									</p>
								</div>
								<div className="mt-5 border-t py-4">
									<div className="flex gap-3 mt-auto items-end justify-end">
										<a
											href={item.url}
											target={"_blank"}
											rel="noreferrer"
											className="bg-gray-800 py-2 px-3 tracking-wider rounded-md outline-none text-sm capitalize text-gray-50 inline-block">
											demo
										</a>
										<a
											href={item.sourceCode}
											target={"_blank"}
											rel="noreferrer"
											className=" py-2 px-3 rounded-md outline-none border-none tracking-wider text-sm inline-block capitalize text-gray-900 ">
											get code
										</a>
									</div>
								</div>
							</div>
						</div>
					);
				})}
		</div>
	);
}

export default ProjectsGrid;
