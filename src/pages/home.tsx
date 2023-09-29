
import styled from 'styled-components';
import Footer from '../components/footer';
import Header from '../components/header';
import Ex1 from "../assets/ex1.jpg";
import Ex2 from "../assets/ex2.jpg";
import Ex3 from "../assets/ex3.jpg";
import Ex4 from "../assets/ex4.jpg";
import ReactPlayer from "react-player";

const HomeWrapper = styled.div`
  background-color: #d9d9d9;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Img = styled.img`
  margin-top: 100px;
  width: 80%;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <Header />
      {/* <Footer /> */}

      <Wrapper>
        <ReactPlayer
          playing
          url={`${process.env.PUBLIC_URL}/video/intro2.mp4`}
          width="100%"
          height="90%"
          loop={true}
          muted
        />
        <Img src={Ex1} />
        <Img src={Ex2} />
        <Img src={Ex3} />
        <Img src={Ex4} />
      </Wrapper>
    </HomeWrapper>
  );
};

export default Home;