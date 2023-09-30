
import styled from "styled-components";
import Header from "../components/header";
// import Ex1 from "../assets/ex1.jpg";
// import Ex2 from "../assets/ex2.jpg";
// import Ex3 from "../assets/ex3.jpg";
// import Ex4 from "../assets/ex4.jpg";
import ReactPlayer from "react-player";
import Footer from "../components/footer";

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
              <div className="box2">
                <div className="box2-line-top"></div>
                <div className="box2-line-right"></div>
                <div className="box2-line-left"></div>
                <div className="box2-line-bottom"></div>
              </div>
              <div className="box3">
                <div className="box3-line-top"></div>
                <div className="box3-line-right"></div>
              </div>
              <div className="box4"></div>
            </div>
            <div className="box-right-wrapper">
              <div className="box5"></div>
              <div className="box6">
                <div className="box6-line-top"></div>
                <div className="box6-line-right"></div>
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