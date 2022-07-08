import Card from "../Card";
import { Profile } from "../../Profile";

function Cards({ state }) {
  return (
    <>
      <Card
        className={`${
          state === 1 ? "block" : "hidden"
        } text-white font-black flex flex-col items-start justify-center tracking-[4px]`}>
        {Profile.skills.frontend.map((item, index) => {
          return (
            <p className="mt-2 uppercase" key={index}>
              {item}
            </p>
          );
        })}
      </Card>
      <Card
        className={`${
          state === 2 ? "block" : "hidden"
        } text-white font-black flex flex-col items-start justify-center capitalize tracking-[4px]`}>
        {Profile.skills.styling.map((item, index) => {
          return (
            <p className="mt-2 uppercase" key={index}>
              {item}
            </p>
          );
        })}
      </Card>
      <Card
        className={`${
          state === 3 ? "block" : "hidden"
        } text-white font-black flex flex-col items-start justify-center capitalize tracking-[4px]`}>
        {Profile.skills.database.map((item, index) => {
          return (
            <p className="mt-2 uppercase" key={index}>
              {item}
            </p>
          );
        })}
      </Card>
      <Card
        className={`${
          state === 4 ? "block" : "hidden"
        } text-white font-black flex flex-col items-start justify-center capitalize tracking-[4px]`}>
        {Profile.skills.tools.map((item, index) => {
          return (
            <p className="mt-2 uppercase" key={index}>
              {item}
            </p>
          );
        })}
      </Card>
    </>
  );
}

export default Cards;
