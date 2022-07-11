import myImage from "../../assets/images/my-image.jpg";
import { FaAngleDown } from "react-icons/fa";
import SelfInfo from "./SelfInfo";

function Hero() {
  return (
    <div className=" flex flex-col items-center justify-center h-full">
      <div className="md:max-w-5xl w-full flex flex-col items-center justify-center h-full px-5">
        <img
          src={myImage}
          alt="myImage"
          className="block md:h-72 md:w-72 h-36 w-36 rounded-full shadow-xl shadow-black/20 object-cover"
        />
        <SelfInfo />
      </div>
      <small className="mt-auto text-sm font-medium tracking-widest">
        let's work together
      </small>
      <FaAngleDown size={24} className="animate-bounce" />
    </div>
  );
}

export default Hero;
