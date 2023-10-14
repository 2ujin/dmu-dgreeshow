import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";
import logo from "../assets/furniture_logo.svg";
import floor from "../assets/floor.png";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const FloorWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const FloorImg = styled.div`
  width: 1390px;
  height: 100%;
  margin-bottom: 20px;
  position: relative;
`;

const Floor = styled.img`
  width: 100%;
`;

const Box = styled.img`
  width: 75px;
  height: 75px;
  position: absolute;
  top: 0;
  z-index: 998;

  &.box1 {
    left: 169px;
    top: 58px;
  }
  &.box2 {
    left: 259px;
    top: 58px;
  }
  &.box3 {
    left: 413px;
    top: 50px;
  }
  &.box4 {
    left: 524px;
    top: 50px;
  }
  &.box5 {
    left: 635px;
    top: 50px;
  }
  &.box6 {
    left: 748px;
    top: 50px;
  }
  &.box7 {
    left: 859px;
    top: 50px;
  }
  &.box8 {
    left: 970px;
    top: 50px;
  }
  &.box9 {
    right: 211px;
    top: 50px;
  }
  &.box10 {
    left: 82px;
    top: 145px;
  }
  &.box11 {
    left: 82px;
    top: 235px;
  }
  &.box12 {
    left: 244px;
    top: 215px;
  }
  &.box13 {
    right: 105px;
    top: 110px;
  }
  &.box14 {
    right: 105px;
    top: 192px;
  }
  &.box15 {
    right: 105px;
    top: 275px;
  }
  &.box16 {
    right: 105px;
    top: 358px;
  }
  &.box17 {
    right: 105px;
    top: 441px;
  }
  &.box18 {
    left: 466px;
    top: 271px;
  }
  &.box19 {
    left: 554px;
    top: 271px;
  }
  &.box20 {
    left: 642px;
    top: 271px;
  }
  &.box21 {
    left: 732px;
    top: 271px;
  }
  &.box22 {
    left: 822px;
    top: 271px;
  }
  &.box23 {
    left: 911px;
    top: 271px;
  }
  &.box24 {
    left: 1001px;
    top: 271px;
  }

  &.box25 {
    left: 466px;
    top: 412px;
  }
  &.box26 {
    left: 569px;
    top: 412px;
  }
  &.box27 {
    left: 677px;
    top: 412px;
  }
  &.box28 {
    left: 761px;
    top: 412px;
  }
  &.box29 {
    left: 840px;
    top: 412px;
  }
  &.box30 {
    left: 921px;
    top: 412px;
  }
  &.box31 {
    left: 1001px;
    top: 412px;
  }
  &.box32 {
    left: 340px;
    top: 340px;
  }
  &.box33 {
    left: 647px;
    top: 647px;
  }
  &.box34 {
    left: 732px;
    top: 647px;
  }
  &.box35 {
    left: 817px;
    top: 647px;
  }
  &.box36 {
    left: 899px;
    top: 647px;
  }
  &.box37 {
    left: 980px;
    top: 647px;
  }
  &.box38 {
    left: 395px;
    top: 647px;
  }
`;

const Furniture = () => {
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });
  const box_list = [
    {
      name: "box1",
      left: "169px",
      top: "58px",
      src: "../assets/furnitureThumbnail/funiture.jpeg",
    },
    {
      name: "box2",
      left: "259px",
      top: "58px",
      src: "../assets/furnitureThumbnail/funiture.jpeg",
    },
    {
      name: "box3",
      left: "413px",
      top: "50px",
      src: "../assets/furnitureThumbnail/funiture.jpeg",
    },
    {
      name: "box4",
      left: "524px",
      top: "50px",
      src: "../assets/furnitureThumbnail/funiture.jpeg",
    },
    {
      name: "box5",
      left: "635px",
      top: "50px",
      src: "../assets/furnitureThumbnail/funiture.jpeg",
    },
    {
      name: "box6",
      left: "748px",
      top: "50px",
      src: "../assets/furnitureThumbnail/funiture.jpeg",
    },
    {
      name: "box7",
      left: "859px",
      top: "50px",
      src: "../assets/furnitureThumbnail/funiture.jpeg",
    },
    {
      name: "box8",
      left: "970px",
      top: "50px",
      src: "../assets/furnitureThumbnail/funiture.jpeg",
    },
    {
      name: "box9",
      right: "211px",
      top: "50px",
      src: "../assets/furnitureThumbnail/funiture.jpeg",
    },
    {
      name: "box10",
      left: "82px",
      top: "145px",
      src: "../assets/furnitureThumbnail/funiture.jpeg",
    },
    {
      name: "box11",
      left: "82px",
      top: "235px",
      src: "../assets/furnitureThumbnail/funiture.jpeg",
    },
    {
      name: "box12",
      left: "244px",
      top: "215px",
      src: "../assets/furnitureThumbnail/funiture.jpeg",
    },
    {
      name: "box13",
      right: "100px",
      top: "105px",
      src: "../assets/furnitureThumbnail/funiture.jpeg",
    },
    {
      name: "box14",
      right: "100px",
      top: "188px",
      src: "../assets/furnitureThumbnail/funiture.jpeg",
    },
    {
      name: "box15",
      right: "100px",
      top: "270px",
      src: "../assets/furnitureThumbnail/funiture.jpeg",
    },
    {
      name: "box16",
      right: "100px",
      top: "350px",
      src: "../assets/furnitureThumbnail/funiture.jpeg",
    },
    {
      name: "box17",
      right: "100px",
      top: "438px",
      src: "../assets/furnitureThumbnail/funiture.jpeg",
    },
    {
      name: "box18",
      left: "462px",
      top: "270px",
      src: "../assets/furnitureThumbnail/funiture.jpeg",
    },
    {
      name: "box19",
      left: "550px",
      top: "270px",
      src: "../assets/furnitureThumbnail/funiture.jpeg",
    },
    {
      name: "box20",
      left: "642px",
      top: "270px",
      src: "../assets/furnitureThumbnail/funiture.jpeg",
    },
    {
      name: "box21",
      left: "732px",
      top: "270px",
      src: "../assets/furnitureThumbnail/funiture.jpeg",
    },
    {
      name: "box22",
      left: "822px",
      top: "270px",
      src: "../assets/furnitureThumbnail/funiture.jpeg",
    },
    {
      name: "box23",
      left: "905px",
      top: "270px",
      src: "../assets/furnitureThumbnail/funiture.jpeg",
    },
    {
      name: "box24",
      left: "999px",
      top: "270px",
      src: "../assets/furnitureThumbnail/funiture.jpeg",
    },
    {
      name: "box25",
      left: "462px",
      top: "412px",
      src: "../assets/furnitureThumbnail/funiture.jpeg",
    },
    {
      name: "box26",
      left: "569px",
      top: "412px",
      src: "../assets/furnitureThumbnail/funiture.jpeg",
    },
    {
      name: "box27",
      left: "677px",
      top: "412px",
      src: "../assets/furnitureThumbnail/funiture.jpeg",
    },
    {
      name: "box28",
      left: "758px",
      top: "412px",
      src: "../assets/furnitureThumbnail/funiture.jpeg",
    },
    {
      name: "box29",
      left: "839px",
      top: "412px",
      src: "../assets/furnitureThumbnail/funiture.jpeg",
    },
    {
      name: "box30",
      left: "920px",
      top: "412px",
      src: "../assets/furnitureThumbnail/funiture.jpeg",
    },
    {
      name: "box31",
      left: "999px",
      top: "412px",
      src: "../assets/furnitureThumbnail/funiture.jpeg",
    },
    {
      name: "box32",
      left: "340px",
      top: "340px",
      src: "../assets/furnitureThumbnail/funiture.jpeg",
    },
    {
      name: "box33",
      left: "645px",
      top: "642px",
      src: "../assets/furnitureThumbnail/funiture.jpeg",
    },
    {
      name: "box34",
      left: "725px",
      top: "642px",
      src: "../assets/furnitureThumbnail/funiture.jpeg",
    },
    {
      name: "box35",
      left: "812px",
      top: "642px",
      src: "../assets/furnitureThumbnail/funiture.jpeg",
    },
    {
      name: "box36",
      left: "894px",
      top: "642px",
      src: "../assets/furnitureThumbnail/funiture.jpeg",
    },
    {
      name: "box37",
      left: "975px",
      top: "642px",
      src: "../assets/furnitureThumbnail/funiture.jpeg",
    },
    {
      name: "box38",
      left: "392px",
      top: "642px",
      src: "../assets/furnitureThumbnail/funiture.jpeg",
    },
  ];

  return (
    <>
      <Header />
      <Wrapper className={isMobile ? "w-mobile" : ""}>
        <TitleWrapper className={isMobile ? "s-mobile" : ""}>
          <Logo src={logo} />
        </TitleWrapper>

        <FloorWrapper>
          <FloorImg>
            <Floor src={floor} />
            {/* 상단 시작 */}
            {box_list.map((position) => (
              <Box
                src={require(`../assets/furnitureThumbnail/funiture.jpeg`)}
                style={{
                  left: position.left,
                  top: position.top,
                  right: position.right,
                }}
              />
            ))}

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
      </Wrapper>

      <Footer isLine={true} />
    </>
  );
};

export default Furniture;
