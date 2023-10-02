import styled, { keyframes } from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";
import poster from "../assets/poster.png";
import box from "../assets/box.svg";
import Typewriter from "../components/typingText";
import { useState, useRef, useEffect } from "react";

const ContentWrapper = styled.div`
  height: 2000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    0deg,
    #984678 -0.01%,
    rgba(242, 133, 66, 0.9) 15.61%,
    #984678 87.81%
  );
`;

const Text = styled.div`
  color: #eee;
  font-size: 65px;
  font-weight: 700;
  letter-spacing: 7.5px;
  position: absolute;
  right: 100px;
  top: 55px;
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
  /* margin-top: 110px; */
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

  &.fade-in {
    animation: ${frameInAnimation} 2s forwards;
  }
`;

const Intro = () => {
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

  return (
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
            <Box src={box} />
            <Line3 />
            <Line4 />
            <Desc className={isInViewport ? "fade-in" : ""} ref={ref}>
              코로나 팬데믹 이후, 소비 패턴이 물질적인 제품에서 경험 중심의
              소비로 크게 변화했다. 이러한 변화는 상업 공간 또한 공간의 크기와
              디자인에 영향을 미쳤으며, 무인 서비스 도입과 같은 혁신적인 변화가
              이뤄졌다. 이제는 어떻게 사람들에게 풍부한 경험을 제공하며, 어떻게
              사람들을 모으고 머물게 할 것인지가 중요한 고려사항이 되었다.
              이러한 힘과 현상을 "공간력"이라 정의한다.
              <br />
              <br />
              동양미래대학교 실내건축디자인학과 제22회 졸업전시는 '공간력'을
              주제로 혁신적인 공간 실험을 진행합니다. "비어있는 간 사이"란
              용어는 빈 공간이 아닌 학생들의 창의력과 관람객의 기억으로 가득한
              공간으로 만들어가는 과정을 나타내고 이번 졸업전시를 통해 엔데믹
              시대의 경험과 기억을 함께 나누고자 합니다.
            </Desc>
          </div>
          <Text>
            <Typewriter text="공간에는 힘이 있다" delay={80} />
          </Text>
          <SubText>空間力 ; 공간력</SubText>
        </PostWrapper>
      </ContentWrapper>

      {/* <Footer /> */}
    </>
  );
};

export default Intro;
