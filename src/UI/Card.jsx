import React from "react";

function Card({ children, className }) {
  return <div className={[" bg-white shadow-md", className]}>{children}</div>;
}

export default Card;
