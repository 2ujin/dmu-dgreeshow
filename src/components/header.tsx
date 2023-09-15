import { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import SubHeader from "./subHeader";

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #ffffff;
  padding: 20px;
`;

const _Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 450px;
`;

const Logo = styled.img``;

const Space = styled.div`
  width: 100px;
`;

const Text = styled.div`
  font-size: 12px;
  &:hover {
    font-size: 12px;
    color: #984678;
  }
`;

const Header = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <HeaderWrapper>
      <Logo src={logo} />

      <_Header>
        <Text>HOME</Text>
        <Text>INTRO</Text>
        <Text>PROFILE</Text>
        <Text onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <span>PROJECT</span>
          {isDropdownVisible && <SubHeader />}
        </Text>
        <Text>EVENT</Text>
      </_Header>
      <Space>ㅤ</Space>
    </HeaderWrapper>
  );
};

export default Header;
