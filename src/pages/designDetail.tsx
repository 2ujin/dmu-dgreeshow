import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";
import test from "../assets/test.png";
import { useLocation, useParams } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;

  &.w-mobile {
    margin-top: 60px;
  }
`;

const Img = styled.img`
  width: 100%;
  margin-bottom: 10px;
`;

const TeamWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 110px 10px;
  margin-left: -60px;

  .teams {
    margin-left: 60px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    .name {
      font-size: 16px;
      margin-top: 20px;
    }
    .team {
      font-size: 30px;
      font-weight: bold;
      font-family: "PyeongChangPeace" !important;
      span {
        font-family: "PyeongChangPeace" !important;
        font-size: 20px;
      }
    }
  }
  .team_img {
    width: 50%;
  }
`;

const DesignDetail = () => {
  const { team } = useParams();
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });

  return (
    <>
      <Header />
      <Wrapper className={isMobile ? "w-mobile" : ""}>
        <Img src={require(`../assets/projectAll/${team}/design/1.jpg`)} />
        <TeamWrapper>
          <Img
            className="team_img"
            src={require(`../assets/teamProfile/${team}.jpg`)}
          />
          <div className="teams">
            <div className="team">{team}</div>
            <div className="name">최이솔 / 김보희 / 성수진</div>
          </div>
        </TeamWrapper>
        <Img src={require(`../assets/projectAll/${team}/design/2.jpg`)} />
        <Img src={require(`../assets/projectAll/${team}/design/3.jpg`)} />
        <Img src={require(`../assets/projectAll/${team}/design/4.jpg`)} />
        <Img src={require(`../assets/projectAll/${team}/design/5.jpg`)} />
      </Wrapper>
      {/* <Footer /> */}
    </>
  );
};

export default DesignDetail;
