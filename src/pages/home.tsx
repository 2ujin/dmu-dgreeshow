
import styled from "styled-components";
import Header from "../components/header";
// import Ex1 from "../assets/ex1.jpg";
// import Ex2 from "../assets/ex2.jpg";
// import Ex3 from "../assets/ex3.jpg";
// import Ex4 from "../assets/ex4.jpg";
import ReactPlayer from "react-player";
import Footer from "../components/footer";
import { useState } from "react";

const HomeWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;

const MenuWrapper = styled.div`
  width: 100%;
  /* padding: 60px 0px; */
  background: linear-gradient(251deg, #ba6c9e 22.05%, #f7bd96 75.22%);
  margin-top: -1px;
  height: 100vh;
`;

const Home = () => {
  const [isHoveredLeft, setIsHoveredLeft] = useState(false);
  const [isHoveredRight, setIsHoveredRight] = useState(false);

  const changeLeftLineStyle = () => {
    const box1_right: any = document.querySelector(".box1-line-right");
    const box1_bottom: any = document.querySelector(".box1-line-bottom");
    const box2_left: any = document.querySelector(".box2-line-left");
    const box2_right: any = document.querySelector(".box2-line-bottom");
    const box3_top: any = document.querySelector(".box3-line-top");
    const box3_right: any = document.querySelector(".box3-line-right");
    box1_right.style.width = isHoveredLeft ? "50%" : "100%";
    box1_bottom.style.height = isHoveredLeft ? "50%" : "100%";
    box2_left.style.height = isHoveredLeft ? "50%" : "100%";
    box2_right.style.height = isHoveredLeft ? "50%" : "100%";
    box3_top.style.width = isHoveredLeft ? "50%" : "100%";
    box3_right.style.height = isHoveredLeft ? "50%" : "100%";
  };
  const changeRightLineStyle = () => {
    const box9_left: any = document.querySelector(".box9-line-left");
    const box9_top: any = document.querySelector(".box9-line-top");
    box9_left.style.height = isHoveredRight ? "50%" : "100%";
    box9_top.style.width = isHoveredRight ? "50%" : "100%";
  };

  return (
    <>
      <HomeWrapper>
        <Header />

        <Wrapper>
          <ReactPlayer
            playing
            url={`${process.env.PUBLIC_URL}/video/intro.mp4`}
            width="100%"
            height="100%"
            loop={true}
            muted
            className={"video"}
          />
        </Wrapper>

        <MenuWrapper>
          <div className="box-wrapper">
            <div className="title">MAIN PROJECT</div>
            <div className="box1">
              <div className="box1-line-right"></div>
              <div className="box1-line-bottom"></div>
            </div>
            <div className="box-left-wrapper">
              <div
                className={`box2 ${isHoveredLeft ? "hovered" : ""}`}
                onMouseEnter={() => {
                  setIsHoveredLeft(true);
                  changeLeftLineStyle();
                }}
                onMouseLeave={() => {
                  setIsHoveredLeft(false);
                  changeLeftLineStyle();
                }}
              >
                <div className="box2-line-top"></div>
                <div className="box2-line-right"></div>
                <div className="box2-line-left"></div>
                <div className="box2-line-bottom"></div>
              </div>
              <div
                className={`box3 ${isHoveredLeft ? "hovered" : ""}`}
                onMouseEnter={() => {
                  setIsHoveredLeft(true);
                  changeLeftLineStyle();
                }}
                onMouseLeave={() => {
                  setIsHoveredLeft(false);
                  changeLeftLineStyle();
                }}
              >
                <div className="box3-title">복합공간설계</div>
                <div className="box3-line-top"></div>
                <div className="box3-line-right"></div>
              </div>
              <div className="box4"></div>
            </div>
            <div className="box-right-wrapper">
              <div className="box5"></div>
              <div
                className={`box6 ${isHoveredRight ? "hovered" : ""}`}
                onMouseEnter={() => {
                  setIsHoveredRight(true);
                  changeRightLineStyle(); // 호버 시 스타일 변경 함수 호출
                }}
                onMouseLeave={() => {
                  setIsHoveredRight(false);
                  changeRightLineStyle(); // 호버 해제 시 스타일 변경 함수 호출
                }}
              >
                <div className="box6-title">가구디자인</div>
                <div className="box6-line-top"></div>
                <div className="box6-line-right"></div>
                <div className="box6-line-left"></div>
                <div className="box6-line-bottom"></div>
              </div>
              <div className="box7"></div>
              <div className="box8"></div>
            </div>
            <div className="box9">
              <div className="box9-line-left"></div>
              <div className="box9-line-top"></div>
            </div>
          </div>
        </MenuWrapper>
      </HomeWrapper>

      {/* <Footer /> */}
    </>
  );
};

export default Home;