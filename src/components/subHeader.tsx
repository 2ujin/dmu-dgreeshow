import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "../App.css";

const SubHeaderWrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.5); */

  position: absolute;
  /* top: 13%;
  left: 56%;
  transform: translate(-50%, -50%);
  padding: 10px 20px;
  border-radius: 9px;
  line-height: 35px; */
`;

const SubItem = styled.div`
  font-size: 12px;
`;

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
