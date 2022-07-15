import { skills } from "../../data/Profile";
import Card from "../../UI/Card";
import Skills from "./Skills";

function Cards() {
  return (
    <div className="h-full overflow-auto py-10 md:px-20 px-5 ">
      {skills.map((item, index) => {
        return (
          <Card
            key={index}
            className=" font-bold text-white p-7 flex flex-col gap-2 first:mt-0 mt-8 drop-shadow rounded-md">
            <div className="uppercase border-b-2 pb-3 text-gray-600 tracking-widest font-black">
              {item.name}
            </div>
            <Skills item={item} />
          </Card>
        );
      })}
    </div>
  );
}

export default Cards;
