import React from "react";
import Button from "../Button";

function Skills({ setState }) {
  return (
    <>
      <Button
        className="text-black md:text-base text-xs py-2 px-5 focus:bg-gradient-to-br from-black to-gray-800 bg-blend-hard-light uppercase focus:text-white rounded-md text-md tracking-wider font-black flex-none"
        onClick={() => setState(1)}>
        languages
      </Button>
      <Button
        className="text-black md:text-base text-xs py-2 px-5 focus:bg-gradient-to-br from-black to-gray-800 bg-blend-hard-light uppercase focus:text-white rounded-md text-md tracking-wider font-black flex-none"
        onClick={() => setState(2)}>
        styling
      </Button>
      <Button
        className="text-black md:text-base text-xs py-2 px-5 focus:bg-gradient-to-br from-black to-gray-800 bg-blend-hard-light uppercase focus:text-white rounded-md text-md tracking-wider font-black flex-none"
        onClick={() => setState(3)}>
        databases
      </Button>
      <Button
        className="text-black md:text-base text-xs py-2 px-5 focus:bg-gradient-to-br from-black to-gray-800 bg-blend-hard-light uppercase focus:text-white rounded-md text-md tracking-wider font-black flex-none"
        onClick={() => setState(4)}>
        tools
      </Button>
    </>
  );
}

export default Skills;
