import Title from "../Title";
import { Link } from "react-router-dom";

function SelfInfo() {
  return (
    <div className="mt-5">
      <Title className="md:text-4xl text-2xl font-black tracking-widest text-justify drop-shadow-xl capitalize">
        hello, i'm varun rana a 24 year old full stack web developer, i write
        code. i've made
        <Link
          to={"/my-projects"}
          className="underline decoration-wavy decoration-blue-500 md:text-3xl mx-3 hover:decoration-orange-500 transition-all duration-300 ease-in-out title">
          web applications
        </Link>{" "}
        and{" "}
        <Link
          to={"/my-projects"}
          className="underline decoration-wavy decoration-orange-500 md:text-3xl mx-3 hover:decoration-blue-500 transition-all duration-300 ease-in-out title">
          mobile apps.
        </Link>
      </Title>
    </div>
  );
}

export default SelfInfo;
