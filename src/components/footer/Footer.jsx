import Icons from "../Icons";

function Footer() {
  return (
    <div className="mt-auto bg-gradient-to-br from-black to-gray-800 bg-blend-hard-light w-full overflow-hidden flex-none md:py-0 py-5">
      <div className="md:h-20 flex md:flex-row flex-col items-center justify-between w-full md:space-y-0 space-y-10 ">
        <div className="tracking-widest h-full px-5 flex items-center justify-center w-full text-white">
          <a
            href="mailto:varunrana829@gmail.com"
            rel="noreferrer"
            target={"_blank"}
            className="text-amber-600 hover:text-white transition-all duration-300 ease-in tracking-widest font-black">
            varunrana829@gmail.com
          </a>
        </div>
        <Icons />
      </div>
    </div>
  );
}

export default Footer;
