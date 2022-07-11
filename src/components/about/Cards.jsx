import Card from "../Card";
import { Profile } from "../../Profile";

function Cards({ state }) {
  const profile = Profile.skills;
  function skillHandler(skill) {
    return skill.map((item, index) => {
      return (
        <p className="mt-2 uppercase" key={index}>
          {item}
        </p>
      );
    });
  }

  return (
    <>
      <Card
        className={`${
          state === 1 ? "block" : "hidden"
        } text-white font-black flex flex-col items-start justify-center tracking-[4px]`}>
        {skillHandler(profile.frontend)}
      </Card>
      <Card
        className={`${
          state === 2 ? "block" : "hidden"
        } text-white font-black flex flex-col items-start justify-center capitalize tracking-[4px]`}>
        {skillHandler(profile.styling)}
      </Card>
      <Card
        className={`${
          state === 3 ? "block" : "hidden"
        } text-white font-black flex flex-col items-start justify-center capitalize tracking-[4px]`}>
        {skillHandler(profile.database)}
      </Card>
      <Card
        className={`${
          state === 4 ? "block" : "hidden"
        } text-white font-black flex flex-col items-start justify-center capitalize tracking-[4px]`}>
        {skillHandler(profile.tools)}
      </Card>
    </>
  );
}

export default Cards;
