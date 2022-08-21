import React from "react";

function Skills({ item }) {
  return (
    <div className="h-full flex gap-10 flex-none w-full px-10 py-5 overflow-auto select-none">
      {item?.option.map((item, index) => {
        return (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-3 h-36 flex-none py-5 first:ml-0 ml-12">
            <img
              src={item.image}
              className="md:w-20 w-16 flex flex-none items-center justify-center h-full object-contain overflow-hidden"
              alt={item.name}
            />
            <p className="text-gray-500 tracking-widest mt-auto capitalize font-medium md:text-sm text-xs">
              {item.value}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Skills;
