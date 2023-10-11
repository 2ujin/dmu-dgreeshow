import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
  margin-bottom: 50px;

  &.w-mobile {
    margin-top: 100px;
  }
`;

const TextItem = styled.div`
  display: flex;
  width: 75%;
  justify-content: space-between;
  cursor: pointer;

  &.w-mobile {
    padding: 16px;
    align-items: flex-start;
    width: 100%;
    flex-direction: column;

    &:last-child {
      margin-bottom: 50px;
    }
  }
`;
const Date = styled.div`
  cursor: pointer;
  color: #000;
  font-size: 86px;
  font-weight: 900;
  line-height: normal;
  flex: 1.5;
  transition: 0.2s all;

  &.w-mobile {
    font-size: 50px;
  }
`;

const Text = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  width: 100%;
  color: #000;
  font-size: 38px;
  font-weight: 800;
  text-align: left;
  margin-left: 10px;
  transition: 0.2s all;

  &.w-mobile {
    margin-left: 0px;
    font-size: 28px;
    margin-top: 10px;
  }
`;

const Hr = styled.div`
  width: 75%;
  height: 3px;
  background-color: #984678;
  margin-top: 40px;
  margin-bottom: 40px;

  &.w-mobile {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const Furniture = () => {
  const list = [
    { date: "10.16 - 10.24", text: "졸업작품 전시회 기간" },
    { date: "10.18", text: "졸업작품 전시회 오프닝 행사" },
    { date: "10.20", text: "졸업작품 경진대회" },
    { date: "10.21", text: "동문회의 밤" },
  ];
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });

  return (
    <>
      <Header />
      <Wrapper className={isMobile ? "w-mobile" : ""}>
        {list.map((item, index) => (
          <>
            <TextItem
              className={`events ${isMobile ? "w-mobile" : ""}`}
              key={index}
            >
              <Date className={`event-date ${isMobile ? "w-mobile" : ""}`}>
                {item.date}
              </Date>
              <Text className={`event-text ${isMobile ? "w-mobile" : ""}`}>
                {item.text}
              </Text>
            </TextItem>

            {index === list.length - 1 ? (
              ""
            ) : (
              <Hr className={isMobile ? "w-mobile" : ""} />
            )}
          </>
        ))}
      </Wrapper>

      <Footer isLine={true} />
    </>
  );
};

export default Furniture;
