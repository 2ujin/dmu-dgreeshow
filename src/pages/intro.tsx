import styled from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";

const HomeWrapper = styled.div`
  background-color: #d9d9d9;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Intro = () => {
  return (
    <HomeWrapper>
      <Header />
      this is intro
      <Footer />
    </HomeWrapper>
  );
};

export default Intro;
