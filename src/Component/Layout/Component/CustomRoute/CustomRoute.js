import React from "react";
import { Link } from "react-router-dom";
function CustomRoute({ classname, children, to, ...props }) {
  return (
    <Link className={classname} {...props} to={to}>
      {children}
    </Link>
  );
}
export default CustomRoute;
