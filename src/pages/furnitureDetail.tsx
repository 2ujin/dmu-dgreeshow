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

  .title-s {
    font-family: "PyeongChangPeace" !important;
    font-size: 40px;
    font-weight: bold;
    margin-top: 100px;
    margin-bottom: 80px;

    &.t-mobile {
      font-size: 25px;
      margin-top: 50px;
      margin-bottom: 30px;
    }
  }
`;

const Img = styled.img`
  width: 100%;
  margin-bottom: 20px;

  &.full {
    width: 100%;
  }
`;

const TeamWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 130px;

  &.t-mobile {
    width: 100%;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 30px;
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .student {
    width: 250px;
    border-radius: 6px;

    &.t-mobile {
      width: 100px;
    }
  }

  .name {
    font-family: "PyeongChangPeace" !important;
    margin-top: 10px;
    font-size: 20px;

    &.t-mobile {
      font-size: 13px;
    }
  }
`;

const FurnitureDetail = () => {
  const { index } = useParams();
  let data: any = team.furniture.filter((_: any) => _.index === Number(index));
  data = data[0];
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });
  return (
    <>
      <Header />
      <Wrapper className={isMobile ? "w-mobile" : ""}>
        <Img
          className="full"
          src={`${process.env.PUBLIC_URL}/projectAll/${data?.index}/furniture/1.jpg`}
        />

        <div className={`title-s ${isMobile ? "t-mobile" : ""}`}>Students</div>
        <TeamWrapper className={isMobile ? "t-mobile" : ""}>
          {data.students.map((name: any) => (
            <Wrap>
              <img
                src={require(`../assets/profile/${name}.jpg`)}
                className={`student ${isMobile ? "t-mobile" : ""}`}
              />
              <div className={`name ${isMobile ? "t-mobile" : ""}`}>
                {name.replace(/[0-9 ]/gim, "")}
              </div>
            </Wrap>
          ))}
        </TeamWrapper>

        <Img
          src={`${process.env.PUBLIC_URL}/projectAll/${data?.index}/furniture/2.jpg`}
        />
        <Img
          src={`${process.env.PUBLIC_URL}/projectAll/${data?.index}/furniture/3.jpg`}
        />
        <Img
          src={`${process.env.PUBLIC_URL}/projectAll/${data?.index}/furniture/4.jpg`}
        />
        <Img
          src={`${process.env.PUBLIC_URL}/projectAll/${data?.index}/furniture/5.jpg`}
        />
        <Img
          onError={(e: any) => {
            e.target.style.display = "none"; // 이미지 로드 실패 시 display: none 적용
          }}
          src={`${process.env.PUBLIC_URL}/projectAll/${data?.index}/furniture/6.jpg`}
        />
      </Wrapper>
      {/* <Footer /> */}
    </>
  );
};

export default FurnitureDetail;
