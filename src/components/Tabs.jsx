import { useState } from "react";
import Cards from "./about/Cards";
import Skills from "./about/Skills";

function Tabs() {
  const [state, setState] = useState(1);

  return (
    <div className="h-full w-full overflow-hidden flex flex-col justify-center items-center md:p-0 p-2">
      <div className=" max-w-xl w-full flex overflow-auto rounded-md">
        <Skills state={state} setState={setState} />
      </div>
      <div className="bg-gradient-to-br from-black to-gray-800 bg-blend-hard-light capitalize max-w-xl overflow-hidden p-10 w-full h-72 flex items-center justify-center drop-shadow-xl rounded-2xl mt-28">
        <Cards state={state} />
      </div>
    </div>
  );
}

export default Tabs;
