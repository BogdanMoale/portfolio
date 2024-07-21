import React from "react";

// NavItem Component
export const NavItem = ({ value, handlerFilterCategory, active }) => {
  let className = "capitalize cursor-pointer hover:text-green";
  if (active === value) className += " text-green";

  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};

// ProjectsNavbar Component
const ProjectsNavbar = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="React" {...props} />
      <NavItem value="JavaScript" {...props} />
      <NavItem value="VBA" {...props} />
      <NavItem value="C#" {...props} />
      <NavItem value="Mongo" {...props} />
      <NavItem value="Arduino" {...props} />
      <NavItem value="C++" {...props} />
      <NavItem value="Python" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
