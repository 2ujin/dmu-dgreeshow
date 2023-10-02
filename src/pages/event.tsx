import { useState } from "react";
import styled from "styled-components";
import Header from "../components/header";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
`;

const TextItem = styled.div`
  display: flex;
  width: 75%;
  justify-content: space-between;
`;
const Date = styled.div`
  color: #000;
  font-size: 86px;
  font-weight: 900;
  line-height: normal;
  flex: 1;
  transition: 0.2s all;
  // test
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  color: #000;
  font-size: 44px;
  font-weight: 800;
  flex: 1;
  text-align: left;
  margin-left: 30px;
  transition: 0.2s all;
`;

const Hr = styled.div`
  width: 75%;
  height: 3px;
  background-color: #984678;
  margin-top: 30px;
  margin-bottom: 55px;
`;

const Event = () => {
  const list = [
    { date: "10.16 - 10.24", text: "졸업작품 전시회 기간" },
    { date: "10.18", text: "졸업작품 전시회 오프닝 행사" },
    { date: "10.20", text: "졸업작품 경진대회" },
    { date: "10.21", text: "동문회의 밤" },
  ];
  return (
    <>
      <Header />
      <Wrapper>
        {list.map((item, index) => (
          <>
            <TextItem className="events" key={index}>
              <Date className="event-date">{item.date}</Date>
              <Text className="event-text">{item.text}</Text>
            </TextItem>

            {index === list.length - 1 ? "" : <Hr />}
          </>
        ))}
      </Wrapper>
    </>
  );
};

export default Event;
