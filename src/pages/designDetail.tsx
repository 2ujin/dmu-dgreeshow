import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";
import team from "../team.json";
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
  width: 80%;
  margin-bottom: 40px;

  &.full {
    width: 100%;
  }
`;

const TeamWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 110px 10px;
  margin-left: -60px;

  &.t-mobile {
    padding: 30px 10px;
    margin-left: 0px;
  }

  .teams {
    margin-left: 60px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    &.t-mobile {
      margin-left: 20px;
      margin-bottom: 20px;
    }

    .name-wrapper {
      display: flex;
      align-items: center;

      .name {
        margin-top: 20px;
        font-size: 25px;
        margin-right: 10px;

        &.t-mobile {
          font-size: 12px;
        }
      }
    }
    .team {
      font-size: 50px;
      font-weight: bold;
      font-family: "PyeongChangPeace" !important;

      &.t-mobile {
        font-size: 18px;
      }
    }
  }
  .team_img {
    width: 50%;

    &.t-mobile {
      width: 70%;
    }
  }
`;

const DesignDetail = () => {
  const { index } = useParams();
  const data = team.design[Number(index) - 1];
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });
  return (
    <>
      <Header />
      <Wrapper className={isMobile ? "w-mobile" : ""}>
        <Img
          className="full"
          src={`${process.env.PUBLIC_URL}/projectAll/${data?.index}/design/1.jpg`}
        />
        <TeamWrapper className={isMobile ? "t-mobile" : ""}>
          <Img
            className={`team_img  ${isMobile ? "w-mobile" : ""}`}
            src={`${process.env.PUBLIC_URL}/projectAll/${data?.index}/profile.jpg`}
          />
          <div className={`teams ${isMobile ? "t-mobile" : ""}`}>
            <div className={`team ${isMobile ? "t-mobile" : ""}`}>
              {data?.team}
            </div>
            <div className="name-wrapper">
              {data?.students.map((name, index) => (
                <div
                  className={`name ${isMobile ? "t-mobile" : ""}`}
                  key={index}
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </TeamWrapper>
        <Img
          src={`${process.env.PUBLIC_URL}/projectAll/${data?.index}/design/2.jpg`}
        />
        <Img
          src={`${process.env.PUBLIC_URL}/projectAll/${data?.index}/design/3.jpg`}
        />
        <Img
          src={`${process.env.PUBLIC_URL}/projectAll/${data?.index}/design/4.jpg`}
        />
        <Img
          src={`${process.env.PUBLIC_URL}/projectAll/${data?.index}/design/5.jpg`}
        />
        <Img
          onError={(e: any) => {
            e.target.style.display = "none"; // 이미지 로드 실패 시 display: none 적용
          }}
          src={`${process.env.PUBLIC_URL}/projectAll/${data?.index}/design/6.jpg`}
        />
      </Wrapper>
      {/* <Footer /> */}
    </>
  );
};

export default DesignDetail;
