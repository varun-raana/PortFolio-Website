import { skills } from "../../data/Profile";
import Card from "../../UI/Card";
import About from "./About";
import Skills from "./Skills";

function Cards() {
	return (
		<div className="h-full overflow-auto py-10 md:px-20 px-5">
			<About />
			<h1 className="text-gray-800 capitalize text-xl w-fit font-black flex">
				<span>my</span>
				<span className="border-b-2 border-gray-800 ml-2">expertise</span>
				<span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6 inline-block ml-2">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
						/>
					</svg>
				</span>
			</h1>
			{skills.map((item, index) => {
				return (
					<Card
						key={index}
						className=" font-bold text-white p-7 flex flex-col gap-2 first:mt-0 mt-8 drop-shadow rounded-md">
						<h2 className="uppercase border-b-2 pb-3 text-gray-600 tracking-widest font-black">
							{item.name}
						</h2>
						<Skills item={item} />
					</Card>
				);
			})}
		</div>
	);
}

export default Cards;
