import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";
import logo from "../assets/design_logo.svg";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f28542;

  &.w-mobile {
    margin-top: 100px;
  }
`;

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 150px;

  &.s-mobile {
    top: 140px;
  }
`;

const Logo = styled.img`
  width: 290px;
  z-index: 998;
`;

const Design = () => {
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });

  return (
    <>
      <Header />
      <Wrapper className={isMobile ? "w-mobile" : ""}>
        <TitleWrapper className={isMobile ? "s-mobile" : ""}>
          <Logo src={logo} />
        </TitleWrapper>
      </Wrapper>

      <Footer isLine={true} />
    </>
  );
};

export default Design;
