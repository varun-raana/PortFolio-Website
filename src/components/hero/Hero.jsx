import Title from "../Title";
import myImage from "../../assets/images/my-image.jpg";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

function Hero() {
  return (
    <div className=" flex flex-col items-center justify-center h-full">
      <div className="md:max-w-5xl w-full flex flex-col items-center justify-center h-full text-center px-5">
        <img
          src={myImage}
          alt="myImage"
          className="block md:h-72 md:w-72 h-36 w-36 rounded-full ring-8 ring-black ring-offset-2 object-cover"
        />
        <div className="mt-5">
          <Title className="md:text-4xl text-2xl font-black tracking-widest text-justify drop-shadow-xl shadow-red-700 capitalize">
            hello, i'm varun rana a 24 year old full stack web developer, i
            write code. i've made
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
      </div>
      <small className="mt-auto text-sm font-medium tracking-widest">
        let's work together
      </small>
      <FaAngleDown size={24} className="animate-bounce" />
    </div>
  );
}

export default Hero;
