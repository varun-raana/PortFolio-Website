import { NavLink } from "react-router-dom";

function Link({ children, to, className, style }) {
  return (
    <NavLink to={to} state={style} className={className}>
      {children}
    </NavLink>
  );
}

export default Link;
