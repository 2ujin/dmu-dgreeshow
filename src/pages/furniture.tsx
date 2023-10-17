import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";
import logo from "../assets/furniture_logo.svg";
import floor from "../assets/floor.png";
import floor_m from "../assets/floor-m.png";

import team from "../team.json";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  &.w-mobile {
    overflow-x: hidden;
    margin-bottom: 0;
  }
  margin-bottom: 40px;
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

const FloorWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const FloorImg = styled.div`
  width: 1390px;
  position: relative;

  &.mobile {
    height: 670px;
  }
`;

const Floor = styled.img`
  width: 100%;
  margin-left: 20px;
  margin-top: 10px;

  &.mobile {
    margin: 0;
  }
`;

const Box = styled.img`
  width: 70px;
  height: 70px;
  position: absolute;
  top: 0;
  z-index: 998;

  &:hover {
    transform: scale(1.5);
  }

  &.mobile {
    width: 40px;
    height: 40px;
  }

  &.box1 {
    left: 85%;
    top: 75px;
  }

  &.box2 {
    left: 85%;
    top: 115px;
  }
  &.box3 {
    left: 85%;
    top: 190px;
  }
  &.box4 {
    left: 85%;
    top: 238px;
  }
  &.box5 {
    left: 85%;
    top: 285px;
  }
  &.box6 {
    left: 85%;
    top: 345px;
  }
  &.box7 {
    left: 85%;
    top: 390px;
  }
  &.box8 {
    left: 85%;
    top: 450px;
  }
  &.box9 {
    left: 85%;
    top: 515px;
  }

  &.box10 {
    left: 73%;
    top: 35px;
  }
  &.box11 {
    left: 61%;
    top: 35px;
  }
  &.box12 {
    left: 64%;
    top: 115px;
  }

  &.box13 {
    right: 45px;
    top: 84%;
  }
  &.box14 {
    right: 85px;
    top: 84%;
  }
  &.box15 {
    right: 125px;
    top: 84%;
  }
  &.box16 {
    right: 165px;
    top: 84%;
  }
  &.box17 {
    right: 205px;
    top: 84%;
  }

  &.box18 {
    right: 125px;
    top: 32%;
  }
  &.box19 {
    right: 125px;
    top: 38%;
  }
  &.box20 {
    right: 125px;
    top: 44%;
  }
  &.box21 {
    right: 125px;
    top: 51%;
  }
  &.box22 {
    right: 125px;
    top: 57%;
  }
  &.box23 {
    right: 125px;
    top: 63%;
  }
  &.box24 {
    right: 125px;
    top: 69%;
  }

  &.box25 {
    left: 157px;
    top: 32%;
  }
  &.box26 {
    left: 157px;
    top: 39%;
  }
  &.box27 {
    left: 157px;
    top: 46%;
  }
  &.box28 {
    left: 157px;
    top: 52%;
  }
  &.box29 {
    left: 157px;
    top: 58%;
  }
  &.box30 {
    left: 157px;
    top: 64%;
  }
  &.box31 {
    left: 157px;
    top: 70%;
  }
  &.box32 {
    left: 187px;
    top: 23%;
  }

  &.box33 {
    left: 40px;
    top: 26%;
  }
  &.box34 {
    left: 47px;
    top: 45%;
  }
  &.box35 {
    left: 47px;
    top: 51%;
  }
  &.box36 {
    left: 47px;
    top: 57%;
  }
  &.box37 {
    left: 47px;
    top: 63%;
  }
  &.box38 {
    left: 47px;
    top: 69%;
  }
`;

const Furniture = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });

  return (
    <>
      <Header />
      <Wrapper className={isMobile ? "w-mobile" : ""}>
        <TitleWrapper className={isMobile ? "s-mobile" : ""}>
          <Logo src={logo} />
        </TitleWrapper>

        {isMobile ? (
          <FloorWrapper>
            <FloorImg className={isMobile ? "mobile" : ""}>
              <Floor className={isMobile ? "mobile" : ""} src={floor_m} />
              {team.furniture.map((item: any) => (
                <Box
                  className={`${item.name} ${isMobile ? "mobile" : ""}`}
                  onClick={() => navigate(`/furniture-detail/${item.index}`)}
                  src={require(`../assets/thumbnailFurniture/${item.team}.jpg`)}
                />
              ))}
            </FloorImg>
          </FloorWrapper>
        ) : (
          <FloorWrapper>
            <FloorImg>
              <Floor src={floor} />
              {team.furniture.map((item: any) => (
                <Box
                  onClick={() => navigate(`/furniture-detail/${item.index}`)}
                  src={require(`../assets/thumbnailFurniture/${item.team}.jpg`)}
                  style={{
                    left: item.left,
                    top: item.top,
                    right: item.right,
                  }}
                />
              ))}

              {/* 상단 시작 */}
              {/* <Box className="box2" src={test} />
                  <Box className="box3" src={test} />
                  <Box className="box4" src={test} />
                  <Box className="box5" src={test} />
                  <Box className="box6" src={test} />
                  <Box className="box7" src={test} />
                  <Box className="box8" src={test} />
                  <Box className="box9" src={test} /> */}
              {/* 상단 끝 */}

              {/* 왼쪽 세로 */}
              {/* <Box className="box10" src={test} />
                  <Box className="box11" src={test} />
                  <Box className="box12" src={test} /> */}
              {/* 왼쪽 세로 끝 */}

              {/* 오른쪽 세로 */}
              {/* <Box className="box13" src={test} />
                  <Box className="box14" src={test} />
                  <Box className="box15" src={test} />
                  <Box className="box16" src={test} />
                  <Box className="box17" src={test} /> */}
              {/* 오른쪽 세로 끝 */}

              {/* 가운데 위 */}
              {/* <Box className="box18" src={test} />
                  <Box className="box19" src={test} />
                  <Box className="box20" src={test} />
                  <Box className="box21" src={test} />
                  <Box className="box22" src={test} />
                  <Box className="box23" src={test} />
                  <Box className="box24" src={test} />
      
                  <Box className="box25" />
                  <Box className="box26" />
                  <Box className="box27" />
                  <Box className="box28" />
                  <Box className="box29" />
                  <Box className="box30" />
                  <Box className="box31" />
      
                  <Box className="box32" /> */}
              {/* 가운데 끝 */}

              {/* 하단 */}
              {/* <Box className="box33" />
                  <Box className="box34" />
                  <Box className="box35" />
                  <Box className="box36" />
                  <Box className="box37" />
                  <Box className="box38" /> */}
            </FloorImg>
          </FloorWrapper>
        )}
      </Wrapper>

      <Footer isLine={true} />
    </>
  );
};

export default Furniture;
