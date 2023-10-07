import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import mlogo from "../assets/mlogo.png";
import SubHeader from "./subHeader";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import i_menu from "../assets/icons/i_menu.svg";
import SideMenu from "./sideMenu";

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #ffffff;
  padding: 33px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  &.mobile {
    padding: 30px;
  }
`;

const _Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 500px;
  padding: 18px;
  position: absolute;
  left: 49%;
  top: 50%;
  transform: translate(-44%, -50%);
`;

const Logo = styled.img`
  width: 170px;
  position: absolute;
  top: 0;
  left: 2%;

  &.mobile-logo {
    width: 40px;
    left: 15px;
    top: 8px;
  }
`;

const Icon = styled.img`
  width: 25px;
  position: absolute;
  right: 10px;
`;

const MText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 12px;
  text-align: center;
  color: #984678;
  font-weight: 600;
  line-height: 13px;
`;

const Header = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const isMobile = useMediaQuery({ query: "(max-width:768px)" });
  const [modalState, setModalState] = useState(false);
  const openModal = () => {
    setModalState(true);
  };

  const closeModal = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setModalState(false);
  };

  return (
    <HeaderWrapper className={isMobile ? "mobile" : "web"}>
      <Link to="/">
        <Logo
          className={isMobile ? "mobile-logo" : "web"}
          src={isMobile ? mlogo : logo}
        />
      </Link>

      {!isMobile ? (
        <_Header>
          {/* <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "header-text"
          }
          to="/"
        >
          HOME
        </NavLink> */}
          <NavLink
            className={({ isActive }) =>
              isActive ? "link-active" : "header-text"
            }
            to="/intro"
          >
            INTRO
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "link-active" : "header-text"
            }
            to="/profile"
          >
            PROFILE
          </NavLink>
          <div
            onClick={() => alert("10월 16일 오픈 예정입니다~!~!!")}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="header-text before-open"
          >
            PROJECT
            {isDropdownVisible && <SubHeader />}
          </div>
          <NavLink
            className={({ isActive }) =>
              isActive ? "link-active" : "header-text"
            }
            to="/event"
          >
            EVENT
          </NavLink>
        </_Header>
      ) : (
        <>
          <Icon src={i_menu} onClick={openModal} />
          <MText>
            2023 INTERIOR ARCHITECTURE <br />
            DESIGN DEGREE SHOW
          </MText>
          <SideMenu data="" state={modalState} closeModal={closeModal} />
        </>
      )}
    </HeaderWrapper>
  );
};

export default Header;
