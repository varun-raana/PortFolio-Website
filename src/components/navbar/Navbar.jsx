import { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import Link from "../../UI/Link";
import Links from "./Links";

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="w-full md:flex items-center justify-between h-20">
      <Link
        to={"/"}
        className={
          "title text-2xl w-72 h-full bg-gradient-to-br from-black to-gray-800 flex flex-none text-white capitalize tracking-widest leading-7 font-bold flex-col items-center justify-center "
        }>
        varun rana
        <small className="text-xs">full stack web developer</small>
      </Link>
      <Links isVisible={isVisible} />

      {/* icon */}
      <div
        className="md:hidden absolute right-8 top-8 cursor-pointer"
        onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? (
          <IoMdClose color="black" size={24} />
        ) : (
          <IoMdMenu color="black" size={24} />
        )}
      </div>
    </div>
  );
}

export default Navbar;
