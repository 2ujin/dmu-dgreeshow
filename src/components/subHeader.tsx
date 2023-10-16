import { NavLink } from "react-router-dom";
import "../App.css";

const SubHeader = () => {
  return (
    <div className="dropdown-menu">
      <ul>
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "header-text"
          }
          to="/design"
        >
          <li> 복합공간설계</li>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "header-text"
          }
          to="/furniture"
        >
          <li>가구디자인</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default SubHeader;
