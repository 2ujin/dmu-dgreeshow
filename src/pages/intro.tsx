import styled, { keyframes } from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";
import poster from "../assets/poster.png";
import box from "../assets/box.svg";
import box2 from "../assets/box2.svg";
import useScrollFadeIn from "../hooks/useScrollFadeIn";
import map from "../assets/map.png";
import mintro from "../assets/m-intro.png";
import mbg from "../assets/m-bg.svg";
import { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import introBottom from "../assets/intro_bottom.png";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    0deg,
    #984678 -0.01%,
    rgba(242, 133, 66, 0.9) 15.61%,
    #984678 87.81%
  );
  width: 100%;
  overflow-x: hidden;
  height: 3942px;
`;

const Text = styled.div`
  color: #52223f;
  font-size: 65px;
  font-weight: 700;
  letter-spacing: 7.5px;
  width: 13ch;
  animation: typing 1s steps(22), blink 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;

  position: absolute;
  right: 73px;
  top: 58px;
  b {
    color: #f28542;
  }
`;

const SubText = styled.div`
  color: #eee;
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 3.5px;
  position: absolute;
  right: 360px;
  top: 400px;
`;

const PostWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  margin-top: 100px;
`;

const Box = styled.img`
  position: absolute;
  top: 0px;
  right: 5px;
  width: 1200px;
  z-index: 0;
`;

const Poster = styled.img`
  width: 650px;
  margin-top: 30px;
  margin-left: 70px;
  position: relative;
  z-index: 998;
`;

const Line1 = styled.div`
  position: absolute;
  left: 0;
  bottom: -30px;
  width: 450px;
  height: 2px;
  margin-left: 50px;
  background-color: #fff;
`;

const Line2 = styled.div`
  position: absolute;
  left: 0;
  bottom: -30px;
  height: 450px;
  width: 2px;
  margin-left: 50px;
  background-color: #fff;
`;

const Line3 = styled.div`
  position: absolute;
  bottom: -510px;
  left: -70px;
  height: 450px;
  width: 3px;
  margin-left: 50px;
  background-color: #fff;
`;

const Line4 = styled.div`
  position: absolute;
  bottom: -60px;
  left: -70px;
  height: 3px;
  width: 450px;
  margin-left: 50px;
  background-color: #fff;
`;

const frameInAnimation = keyframes`
  0% {
    opacity: 0
  }
  50% {
    opacity: 0.5
  }
  100%{
    opacity: 1
  }
`;

const Desc = styled.div`
  max-width: 910px;
  color: #fff;
  text-align: justify;
  font-size: 20px;
  font-weight: 500;
  line-height: 251.8%; /* 60.432px */
  letter-spacing: 1.32px;
  position: absolute;
  margin-top: 950px;
  left: 25px;

  &.frame-in {
    animation: ${frameInAnimation} 0.8s forwards;
  }
`;

const MDesc = styled.div`
  color: #fff;
  text-align: justify;
  font-size: 13px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 1.32px;
  padding: 0 17px;
  margin-top: 10px;

  &.frame-in {
    animation: ${frameInAnimation} 0.8s forwards;
  }
`;

const Box2Wrapper = styled.div`
  position: absolute;
  top: 1400px;
  right: 0;
  width: 100%;
`;

const Location = styled.div`
  color: #fff;
  font-size: 36px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.9px;
  position: absolute;
  top: 180px;
  left: 80px;
`;

const Opening = styled.div`
  color: #fff;
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 0.84px;
  position: absolute;
  top: 520px;
  left: 58%;

  &.m-intro {
    position: relative;
    top: 10px;
    left: 0;
    font-size: 16px;
    /* margin-top: 20px; */
    margin-bottom: 14px;
  }
`;

const Date = styled.div`
  color: #fff;
  font-size: 48px;
  font-weight: 400;
  letter-spacing: 1.68px;
  position: absolute;
  top: 550px;
  left: 58%;
  &.fade-in2 {
    animation: ${frameInAnimation} 1s forwards;
  }
  &.m-intro {
    position: relative;
    top: 0;
    left: 0;
    font-size: 30px;
    margin-bottom: 14px;
  }
`;

const Where = styled.div`
  color: #984678;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 3.36px;

  position: absolute;
  top: 650px;
  left: 58%;
  &.fade-in2 {
    animation: ${frameInAnimation} 1s forwards;
  }
  &.m-intro {
    position: relative;
    top: 0;
    left: 0;
    font-size: 35px;
    margin-bottom: 10px;
  }
`;

const Map = styled.img`
  width: 800px;
  position: absolute;
  top: 280px;
  left: 5%;

  &.m-intro {
    position: relative;
    top: -30px;
    left: 20px;
    width: 90%;
  }
`;

const MIntro = styled.img`
  width: 80%;
  margin-top: 20px;
`;

const MPosterWrapper = styled.div`
  background-image: url(${mbg});
  width: 100%;
  height: 500px;
  zoom: 0.7;
  background-repeat: no-repeat;
  margin-top: 20px;
  position: relative;
`;

const MPoster = styled.img`
  width: 350px;
  position: absolute;
  top: 35px;
  left: 23px;
  z-index: 998;
`;

const BottomWrapper = styled.div`
  margin-top: 1600px;
  position: relative;
`;

const IntroBottom = styled.img`
  width: 100%;
`;

const Intro = () => {
  // const animatedItem: any = useScrollFadeIn("up", 1, 0);
  // const animatedItem2: any = useScrollFadeIn("right", 1, 0);

  const animatedItem33: any = {
    0: useScrollFadeIn("up", 1, 0),
    1: useScrollFadeIn("left", 1, 0.8),
    2: useScrollFadeIn("up", 1, 0),
  };

  const [isInViewport, setIsInViewport] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
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

  const isMobile = useMediaQuery({ query: "(max-width:768px)" });

  return (
    <>
      {!isMobile ? (
        <>
          <Header />
          <ContentWrapper>
            <PostWrapper>
              <div className="poster-wrapper">
                <Poster src={poster} />
                <Line1 />
                <Line2 />
              </div>
              <div className="box-wrapper-2">
                <Desc className={isInViewport ? "frame-in" : ""} ref={ref}>
                  코로나 팬데믹 이후, 소비 패턴이 물질적인 제품에서 경험 중심의
                  소비로 크게 변화했다. 이러한 변화는 상업 공간 또한 공간의
                  크기와 디자인에 영향을 미쳤으며, 무인 서비스 도입과 같은
                  혁신적인 변화가 이뤄졌다. 이제는 어떻게 사람들에게 풍부한
                  경험을 제공하며, 어떻게 사람들을 모으고 머물게 할 것인지가
                  중요한 고려사항이 되었다. 이러한 힘과 현상을 "공간력"이라
                  정의한다.
                  <br />
                  <br />
                  동양미래대학교 실내건축디자인학과 제22회 졸업전시는 '공간력'을
                  주제로 혁신적인 공간 실험을 진행합니다. "비어있는 간 사이"란
                  용어는 빈 공간이 아닌 학생들의 창의력과 관람객의 기억으로
                  가득한 공간으로 만들어가는 과정을 나타내고 이번 졸업전시를
                  통해 엔데믹 시대의 경험과 기억을 함께 나누고자 합니다.
                </Desc>
                <Box src={box} />
                <Line3 />
                <Line4 />
              </div>
              <Text>
                <b>공간</b>에는 <b>힘이</b> 있다
              </Text>
              <SubText>空間力 ; 공간력</SubText>

              <Box2Wrapper>
                <Location>LOCATION</Location>

                <div {...animatedItem33[1]}>
                  <Opening>OPENING 2023.10.18</Opening>
                  <Date>2023.10.16-10.22</Date>
                  <Where>
                    동양미래대학교 8-1F <br />| 6DM GALLERY
                  </Where>
                </div>
                <a href="https://naver.me/GkKrYVUz" target="_blank">
                  <Map src={map} />
                </a>
                {/* <Box2 src={box2} /> */}
              </Box2Wrapper>
            </PostWrapper>
            <BottomWrapper>
              <IntroBottom src={introBottom} />
            </BottomWrapper>
          </ContentWrapper>

          <Footer />
        </>
      ) : (
        <>
          <Header />
          <ContentWrapper className="m-height">
            <div className="mintroo" {...animatedItem33[0]}>
              <MIntro src={mintro}></MIntro>
            </div>

            <MDesc>
              코로나 팬데믹 이후, 소비 패턴이 물질적인 제품에서 경험 중심의
              소비로 크게 변화했다. 이러한 변화는 상업 공간 또한 공간의 크기와
              디자인에 영향을 미쳤으며, 무인 서비스 도입과 같은 혁신적인 변화가
              이뤄졌다. 이제는 어떻게 사람들에게 풍부한 경험을 제공하며, 어떻게
              사람들을 모으고 머물게 할 것인지가 중요한 고려사항이 되었다.
              이러한 힘과 현상을 "공간력"이라 정의한다.
            </MDesc>
            <MPosterWrapper>
              <MPoster src={poster} />
            </MPosterWrapper>
            <MDesc className={isInViewport ? "frame-in" : ""} ref={ref}>
              동양미래대학교 실내건축디자인학과 제22회 졸업전시는 '공간력'을
              주제로 혁신적인 공간 실험을 진행합니다. "비어있는 간 사이"란
              용어는 빈 공간이 아닌 학생들의 창의력과 관람객의 기억으로 가득한
              공간으로 만들어가는 과정을 나타내고 이번 졸업전시를 통해 엔데믹
              시대의 경험과 기억을 함께 나누고자 합니다.
              <div className="m-text-wrapper" {...animatedItem33[2]}>
                <Opening className={isMobile ? "m-intro" : ""}>
                  OPENING 2023.10.18
                </Opening>
                <Date className={isMobile ? "m-intro" : ""}>
                  2023.10.16-10.22
                </Date>
                <Where className={isMobile ? "m-intro" : ""}>
                  동양미래대학교 8-1F <br />| 6DM GALLERY
                </Where>
              </div>
            </MDesc>

            <a href="https://naver.me/GkKrYVUz" target="_blank">
              <Map src={map} className={isMobile ? "m-intro" : ""} />
            </a>
          </ContentWrapper>
        </>
      )}
    </>
  );
};

export default Intro;
