import React from "react";

function Container({ children }) {
  return (
    <div className="overflow-x-hidden overflow-y-auto max-w-7xl mx-auto h-screen flex flex-col justify-center w-full">
      {children}
    </div>
  );
}

export default Container;
