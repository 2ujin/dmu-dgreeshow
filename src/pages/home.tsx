import styled, { keyframes } from "styled-components";
import Header from "../components/header";
import ReactPlayer from "react-player";
import Footer from "../components/footer";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import mbox from "../assets/m-box.svg";
import mbox2 from "../assets/m-box2.svg";
import mintro from "../assets/mintro.gif";
import useScrollFadeIn from "../hooks/useScrollFadeIn";

const HomeWrapper = styled.div`
  height: 100%;
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
  background: linear-gradient(251deg, #ba6c9e 22.05%, #f7bd96 75.22%);
  margin-top: -10px;
  /* height: 100vh; */
  position: relative;
  &.mobile-wrapper {
    padding: 20px;
    overflow-x: hidden;
    margin-bottom: -127px;
    height: 720px;
  }
`;

const frameInAnimation = keyframes`
  0% {
    font-size: 60px;
    line-height: 128%;
  }

  100%{
    font-size: 110px;
    line-height: 128%;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-44%, -50%);
  color: #fff;
  text-align: center;
  font-style: normal;
  font-weight: 100;
  line-height: 128%;
  font-size: 0px;
  &.frame-in {
    animation: ${frameInAnimation} 0.8s forwards;
  }
`;

const Mtext = styled.div`
  color: #fff;
  text-align: center;
  font-size: 55px;
  font-weight: 100;
  line-height: 131.467%;
  position: absolute;
  left: 20px;
  top: 50px;
`;

const Box = styled.img`
  position: absolute;
  right: 10px;
  width: 350px;
`;

const Box2 = styled.img`
  position: absolute;
  bottom: 0;
  right: -50px;
  width: 350px;
`;

const SubText = styled.div`
  position: absolute;
  right: 35px;
  top: 160px;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
`;

const SubText2 = styled.div`
  position: absolute;
  bottom: 270px;
  left: 60px;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
`;

const Mintro = styled.img`
  width: 100%;
  margin-top: 50px;
`;

const Home = () => {
  const [isHoveredLeft, setIsHoveredLeft] = useState(false);
  const [isHoveredRight, setIsHoveredRight] = useState(false);
  const [isInViewport, setIsInViewport] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const animatedItem: any = useScrollFadeIn("up", 1, 0.1);

  useEffect(() => {
    console.log(`
    ▒▒▒▒▒▒▒▒▒▒▒▒
    ▒▒▒▒▓▒▒▓▒▒▒▒
    ▒▒▒▒▓▒▒▓▒▒▒▒
    ▒▒▒▒▒▒▒▒▒▒▒▒
    ▒▓▒▒▒▒▒▒▒▒▓▒
    ▒▒▓▓▓▓▓▓▓▓▒▒
    ▒▒▒▒▒▒▒▒▒▒▒▒     웃어라 :)
    `);
    console.log(`
    ╭ ◜◝ ͡ ◜◝ ͡ ◜◝ ͡ ◜◝ ͡ ◜◝ ͡ ◜◝ ͡ ◜◝ ͡ ◜◝ ͡ ◜◝╮
                최이솔 바보 멍충이
    ╰ ◟◞ ͜ ◟◞ ͜ ◟◞ ͜ ◟◞ ͜ ◟◞ ͜ ◟◞ ͜ ◟◞ ͜ ◟◞ ͜ ◟◞◟◞ ͜ ◟◞ ╯
    O °
    ᕱ ᕱ
   ( ･ω･)
   / つΦ . .. . ﹢ ⃰ ଂ ಇ
    `);
    console.log("졸전 고생했어");
    console.log("(곧)졸업도 축하해");
    console.log("이솔이 앞날 창창");
    console.log("apnalchangchang :)");
    console.log("웹 디자인 by 최이솔");
    console.log("웹 개발 by 2j");

    console.log(`
     ╱◥████◣
     │田│▤╠╣▤│
     ╱◥████◣ ╱◥◣
     ╱◥◣║ ▤∩▤║║田│║
     │田│◥███◣╱◥███◣
     ╱◥◣ ◥███◣ 田 ∩│▤║
    ╱◥◣│╱◥█◣║∩∩∩║◥███◣
    ║田 ││田│∩║ 田∩田 ║田∩田 ║

    ~ 동양미래대학교 실내건축디자인과 ~
    `);

    if (!ref.current) return;
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInViewport(true);
        } else {
          setIsInViewport(false);
        }
      });
    };

    const options = { root: null, rootMargin: "0px", threshold: 0 };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const changeLeftLineStyle = () => {
    const box1_right: any = document.querySelector(".box1-line-right");
    const box1_bottom: any = document.querySelector(".box1-line-bottom");
    const box2_left: any = document.querySelector(".box2-line-left");
    const box2_right: any = document.querySelector(".box2-line-bottom");
    const box2_top: any = document.querySelector(".box2-line-top");
    const box2_bottom: any = document.querySelector(".box2-line-right");
    const box2_title: any = document.querySelector(".box2-title");
    const box3_top: any = document.querySelector(".box3-line-top");
    const box3_right: any = document.querySelector(".box3-line-right");
    box1_right.style.width = isHoveredLeft ? "50%" : "100%";
    box1_bottom.style.height = isHoveredLeft ? "50%" : "100%";
    box2_left.style.height = isHoveredLeft ? "50%" : "100%";
    box2_left.style.bottom = isHoveredLeft ? "0" : "0";
    box2_right.style.height = isHoveredLeft ? "50%" : "100%";
    box2_top.style.width = isHoveredLeft ? "210px" : "100%";
    box3_top.style.width = isHoveredLeft ? "50%" : "100%";
    box3_right.style.height = isHoveredLeft ? "50%" : "100%";
    box2_title.style.right = isHoveredLeft ? "0px" : "114px";
    box2_bottom.style.width = isHoveredLeft ? "50%" : "100%";
  };
  const changeRightLineStyle = () => {
    const box9_left: any = document.querySelector(".box9-line-left");
    const box9_top: any = document.querySelector(".box9-line-top");
    const box6_title: any = document.querySelector(".box6-title");
    const box6_top: any = document.querySelector(".box6-line-top");
    const box6_right: any = document.querySelector(".box6-line-right");
    box9_left.style.height = isHoveredRight ? "50%" : "100%";
    box9_top.style.width = isHoveredRight ? "50%" : "100%";
    box6_top.style.width = isHoveredRight ? "100%" : "0";
    box6_title.style.right = isHoveredRight ? "0" : "125px";
    box6_right.style.height = isHoveredRight ? "100%" : "0";
  };

  const isMobile = useMediaQuery({ query: "(max-width:768px)" });

  return (
    <>
      <HomeWrapper>
        <Header />

        <Wrapper>
          {!isMobile ? (
            <ReactPlayer
              playsInline
              playing
              url={`${process.env.PUBLIC_URL}/video/intro.mp4`}
              width="100%"
              height="100%"
              loop={true}
              muted
              className={isMobile ? "mobile-video" : "video"}
            />
          ) : (
            <Mintro src={mintro} />
          )}
        </Wrapper>

        {!isMobile ? (
          <MenuWrapper>
            <div className="box-wrapper">
              <Container className={isInViewport ? "frame-in" : ""} ref={ref}>
                SPACE <br /> WITHIN <br /> SPACE
              </Container>
              <div className="box1">
                <div className="box1-line-right"></div>
                <div className="box1-line-bottom"></div>
              </div>
              <div className="box-left-wrapper">
                <div
                  onClick={() => alert("10월 16일 오픈 예정입니다~!~!!")}
                  className={`box2 before-open ${
                    isHoveredLeft ? "hovered" : ""
                  }`}
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
                  <div className="box2-title">복합공간설계</div>
                </div>
                <div className={`box3 ${isHoveredLeft ? "hovered" : ""}`}>
                  <div className="box3-line-top"></div>
                  <div className="box3-line-right"></div>
                </div>
                <div className="box4"></div>
              </div>
              <div className="box-right-wrapper">
                <div className="box5"></div>
                <div
                  onClick={() => alert("10월 16일 오픈 예정입니다~!~!!")}
                  className={`box6 before-open ${
                    isHoveredRight ? "hovered" : ""
                  }`}
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
        ) : (
          <MenuWrapper className={isMobile ? "mobile-wrapper" : ""}>
            <Mtext {...animatedItem}>
              SPACE <br />
              WITHIN <br />
              SPACE
            </Mtext>

            <Box src={mbox} />
            <Box2 src={mbox2} />
            <SubText onClick={() => alert("10월 16일 오픈 예정입니다~!~!!")}>
              복합공간설계
            </SubText>
            <SubText2 onClick={() => alert("10월 16일 오픈 예정입니다~!~!!")}>
              가구디자인
            </SubText2>
          </MenuWrapper>
        )}
      </HomeWrapper>

      <Footer />
    </>
  );
};

export default Home;
