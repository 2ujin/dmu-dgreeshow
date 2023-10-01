import styled from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";
import poster from "../assets/poster.png";
import box from "../assets/box.svg";

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
  font-size: 60px;
  font-weight: 700;
  letter-spacing: 7.5px;
  position: absolute;
  right: 100px;
  top: 50px;
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

const Intro = () => {
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
          <div className="box-wrapper">
            <Box src={box} />
            <Line3 />
            <Line4 />
          </div>
          <Text>
            <b>공간</b>에는 <b>힘</b>이 있다
          </Text>
          <SubText>空間力 ; 공간력</SubText>
        </PostWrapper>
      </ContentWrapper>

      {/* <Footer /> */}
    </>
  );
};

export default Intro;
