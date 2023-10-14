import { useMediaQuery } from "react-responsive";
import styled, { keyframes } from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";
import logo from "../assets/design_logo.svg";
import team from "../team.json";
import { useNavigate } from "react-router-dom";

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
    transform: translate3d(0, 0);
  }
  100% {
    transform: translate3d(-100%, 0, 0);
  }
`;

const RowsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 35px;

  &.right {
    animation: ${moveAnimation} 300s linear infinite;
  }
  &.left {
    animation: ${moveLeftAnimation} 300s linear infinite;
  }
`;

const Img = styled.img`
  width: 250px;
  height: 250px;
  margin-left: 27px;

  &:hover {
    cursor: pointer;
    transform: rotate(-8deg);
  }
`;

const Design = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });
  let result = [];
  for (let i = 0; i < team.design.length; i += 6) {
    let temp;
    temp = team.design.slice(i, i + 6);
    result.push(temp);
  }

  const last: any = result.pop();
  result[result.length - 1].push(...last);

  for (let i = 0; i < result.length; i++) {
    result[i] = [
      ...result[i],
      ...result[i],
      ...result[i],
      ...result[i],
      ...result[i],
    ];
  }

  return (
    <>
      <Header />
      <Wrapper className={isMobile ? "w-mobile" : ""}>
        <TitleWrapper className={isMobile ? "s-mobile" : ""}>
          <Logo src={logo} />
        </TitleWrapper>

        <RowsWrapper className="right">
          {result[0].map((name, index) => (
            <Img
              onClick={() => navigate(`/design-detail/${name}`)}
              key={index}
              src={require(`../assets/thumbnailDesign/${name}.jpg`)}
            />
          ))}
        </RowsWrapper>

        <RowsWrapper className="left">
          {result[1].map((name) => (
            <Img
              onClick={() => navigate(`/design-detail/${name}`)}
              src={require(`../assets/thumbnailDesign/${name}.jpg`)}
            />
          ))}
        </RowsWrapper>

        <RowsWrapper className="right">
          {result[2].map((name) => (
            <Img
              onClick={() => navigate(`/design-detail/${name}`)}
              src={require(`../assets/thumbnailDesign/${name}.jpg`)}
            />
          ))}
        </RowsWrapper>
        <RowsWrapper className="left">
          {result[3].map((name) => (
            <Img
              onClick={() => navigate(`/design-detail/${name}`)}
              src={require(`../assets/thumbnailDesign/${name}.jpg`)}
            />
          ))}
        </RowsWrapper>
        {/* <RowsWrapper className="right">
          {result[4].map((name) => (
            <Img src={require(`../assets/thumbnailDesign/${name}.jpg`)} />
          ))}
        </RowsWrapper>
        <RowsWrapper className="left">
          {result[5].map((name) => (
            <Img src={require(`../assets/thumbnailDesign/${name}.jpg`)} />
          ))}
        </RowsWrapper> */}
      </Wrapper>

      <Footer isLine={true} />
    </>
  );
};

export default Design;
