import "./SidebarStyles.css";
import { NavLink } from "react-router-dom";
import { data } from "../../helpers/data";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import { useState } from "react";

function Sidebar() {


  const [open, setOpen] = useState(true);
  return (
    <div className={`sidebar ${!open ? "open" : ""}`}>
      <img
        className="logo"
        src="https://cdn.pixabay.com/photo/2016/06/22/08/40/atom-1472657_640.png"
        alt="atom-logo"
      />
      <ul className="sidebar-items">
        {data.map((item) => (
          <li>
            <NavLink to={item.href}>
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
      <button className="toggle" onClick={() => setOpen(!open)}>
        {open ? (
          <BsFillArrowLeftSquareFill className="fa" />
        ) : (
          <BsFillArrowRightSquareFill className="io" />
        )}
      </button>
    </div>
  );
}

export default Sidebar;
