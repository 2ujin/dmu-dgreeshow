import styled from 'styled-components';
import logo from "../assets/logo.svg";

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
  width: 150px;
`;

const Text = styled.div`
  font-size: 12px;
`;

const Header = () => {
  console.log("hello");
  return (
    <HeaderWrapper>
      <Logo src={logo} />
      <_Header>
        <Text>Home</Text>
        <Text>INTRO</Text>
        <Text>PROFILE</Text>
        <Text>PROJECT</Text>
        <Text>EVENT</Text>
      </_Header>
      <Space></Space>
    </HeaderWrapper>
  );
};

export default Header;