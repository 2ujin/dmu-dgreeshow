import { useMediaQuery } from "react-responsive";
import styled, { keyframes } from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";
import logo from "../assets/design_logo.svg";

const Wrapper = styled.div`
  width: 100%;
  height: 2000px;
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
  margin-top: 150px;
  margin-bottom: 70px;
  &.s-mobile {
    top: 140px;
  }
`;

const Logo = styled.img`
  width: 290px;
  z-index: 998;
`;

const moveAnimation = keyframes`
  0% {
    transform: translate3d(0, 0);
  }
  100% {
    transform: translate3d(100%, 0, 0);
  }
`;

const moveLeftAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%); /* 왼쪽으로 이동 */
  }
`;

const RowsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 35px;

  &.right {
    animation: ${moveAnimation} 200s linear infinite;
  }
  &.left {
    animation: ${moveLeftAnimation} 200s linear infinite;
  }
`;

const Img = styled.div`
  width: 250px;
  height: 250px;
  background-color: #e2e2e2;
  margin-left: 27px;
`;

const Design = () => {
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });
  let test = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  test = [...test, ...test, ...test, ...test];

  return (
    <>
      <Header />
      <Wrapper className={isMobile ? "w-mobile" : ""}>
        <TitleWrapper className={isMobile ? "s-mobile" : ""}>
          <Logo src={logo} />
        </TitleWrapper>

        <RowsWrapper className="right">
          {test.map((_) => (
            <Img />
          ))}
        </RowsWrapper>

        <RowsWrapper className="left">
          {test.map((_) => (
            <Img />
          ))}
        </RowsWrapper>

        <RowsWrapper className="right">
          {test.map((_) => (
            <Img />
          ))}
        </RowsWrapper>
        <RowsWrapper className="left">
          {test.map((_) => (
            <Img />
          ))}
        </RowsWrapper>
        <RowsWrapper className="right">
          {test.map((_) => (
            <Img />
          ))}
        </RowsWrapper>
        <RowsWrapper className="left">
          {test.map((_) => (
            <Img />
          ))}
        </RowsWrapper>
      </Wrapper>

      <Footer isLine={true} />
    </>
  );
};

export default Design;
