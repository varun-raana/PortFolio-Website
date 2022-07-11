import React from "react";
import Button from "../Button";

function Skills({ setState, state }) {
  return (
    <>
      <Button
        className={` md:text-base text-xs py-2 px-5 ${
          state === 1
            ? "bg-gradient-to-br from-black to-gray-800 text-white"
            : "text-black"
        } focus: bg-blend-hard-light uppercase rounded-md text-md tracking-wider font-black flex-none`}
        onClick={() => setState(1)}>
        languages
      </Button>
      <Button
        className={` md:text-base text-xs py-2 px-5 ${
          state === 2
            ? "bg-gradient-to-br from-black to-gray-800 text-white"
            : "text-black"
        } focus: bg-blend-hard-light uppercase rounded-md text-md tracking-wider font-black flex-none`}
        onClick={() => setState(2)}>
        styling
      </Button>
      <Button
        className={` md:text-base text-xs py-2 px-5 ${
          state === 3
            ? "bg-gradient-to-br from-black to-gray-800 text-white"
            : "text-black"
        } focus: bg-blend-hard-light uppercase rounded-md text-md tracking-wider font-black flex-none`}
        onClick={() => setState(3)}>
        databases
      </Button>
      <Button
        className={` md:text-base text-xs py-2 px-5 ${
          state === 4
            ? "bg-gradient-to-br from-black to-gray-800 text-white"
            : "text-black"
        } focus: bg-blend-hard-light uppercase rounded-md text-md tracking-wider font-black flex-none`}
        onClick={() => setState(4)}>
        tools
      </Button>
    </>
  );
}

export default Skills;
