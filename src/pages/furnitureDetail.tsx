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
  margin-bottom: 10px;
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
          src={`${process.env.PUBLIC_URL}/projectAll/${data?.index}/furniture/1.jpg`}
        />
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
