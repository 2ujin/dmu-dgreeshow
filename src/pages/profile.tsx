import styled from "styled-components";
import Header from "../components/header";
import bg from "../assets/student_bg.svg";
import logo from "../assets/student_logo.svg";
import test from "../assets/profile/최이솔.jpg";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Footer from "../components/footer";

const Wrapper = styled.div`
  width: 100%;
  min-height: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 150px;

  &.s-mobile {
    top: 140px;
  }
`;

const Title = styled.img`
  width: 290px;
  z-index: 998;
`;

const Bg = styled.div`
  width: 100%;
  height: 2600px;
  background-image: url(${bg});
  background-repeat: repeat-y;
  position: absolute;

  &.height {
    height: 1600px;
  }

  &.height2 {
    height: 2200px;
  }
`;

const StudentWrapper = styled.div`
  width: 70%;
  margin-top: 300px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  z-index: 99;

  &.s-mobile {
    justify-content: center;
    width: 100%;
  }
`;

const Student = styled.div`
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  span {
    margin-top: 15px;
    color: #000;
    font-size: 20px;
    font-weight: 400;
  }

  &.s-mobile {
    margin-left: 10px;
  }
`;

const StudentImage = styled.img`
  display: block;
  width: 180px;
  filter: grayscale(80%);
  transition: 0.2s all;
  border-radius: 6px;

  ${Student}:hover & {
    transform: scale(1.02);
    filter: grayscale(0%);
  }

  &.s-mobile {
    width: 160px;
    filter: grayscale(0%);
  }
`;

const SubMenuWrappeer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  width: 270px;
`;

const MenuItem = styled.div`
  text-align: center;
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  color: #949494;
  cursor: pointer;

  &.active {
    color: #f28542;
  }
`;

const Profile = () => {
  const subList = ["ㄱ - ㄹ", "ㅁ - ㅇ", "ㅇ - ㅎ"];
  const [subActive, setsubActive] = useState("ㄱ - ㄹ");

  const listA = [
    "곽민지",
    "강다현",
    "강형민",
    "고유빈",
    "곽선영",
    "김경호",
    "김규진",
    "김다은",
    "김다은19",
    "김도영",
    "김민",
    "김민영",
    "김보희",
    "김상준",
    "김상현",
    "김선우",
    "김소망",
    "김소영",
    "김수연",
    "김수연20",
    "김시영",
    "김시온",
    "김시후",
    "김애린",
    "김영준",
    "김예빈",
    "김유진",
    "김은호",
    "김혜원",
    "김희원",
    "나예림",
    "류정원",
    "류제영",
  ];
  const listB = [
    "문정민",
    "박다운",
    "박미정",
    "박선우",
    "박수빈",
    "박윤하",
    "박지민",
    "박진이",
    "서지현",
    "서현선",
    "석정인",
    "성수진",
    "손승찬",
    "손채원",
    "신예닮",
    "심규리",
    "심규원",
    "오윤근",
    "유지민",
    "윤혜린",
  ];

  const listC = [
    "이경민",
    "이다훈",
    "이도헌",
    "이예은",
    "이예진",
    "이유진",
    "이주연",
    "이진우",
    "이태호",
    "이현남",
    "임다은",
    "장윤아",
    "전승욱",
    "전인범",
    "정미홍",
    "정민형",
    "조다은",
    "조예나",
    "진가영",
    "차지민",
    "채규리",
    "최민주",
    "최소현",
    "최이솔",
    "하다현",
    "한새영",
    "한수연",
    "황서연",
  ];
  const [studentList, setstudentList] = useState(listA);

  const clickSubMenu = (item: string) => {
    setsubActive(item);
    if (item === subList[0]) {
      setstudentList(listA);
    } else if (item === subList[1]) {
      setstudentList(listB);
    } else {
      setstudentList(listC);
    }
  };

  const isMobile = useMediaQuery({ query: "(max-width:768px)" });

  return (
    <>
      <Header />
      <Bg
        className={
          subActive === "ㅁ - ㅇ"
            ? "height"
            : subActive === "ㅇ - ㅎ"
            ? "height2"
            : ""
        }
      />
      <TitleWrapper className={isMobile ? "s-mobile" : ""}>
        <Title src={logo} />
        <SubMenuWrappeer>
          {subList.map((item) => (
            <MenuItem
              className={subActive === item ? "active" : ""}
              onClick={() => clickSubMenu(item)}
            >
              {item}
            </MenuItem>
          ))}
        </SubMenuWrappeer>
      </TitleWrapper>
      <Wrapper>
        <StudentWrapper className={isMobile ? "s-mobile" : ""}>
          {studentList.map((name) => (
            <Student className={isMobile ? "s-mobile" : ""}>
              <StudentImage
                className={isMobile ? "s-mobile" : ""}
                loading="lazy"
                src={`${process.env.PUBLIC_URL}/profile/${name}.jpg`}
              />
              <span>{name.replace(/[0-9 ]/gim, "")}</span>
            </Student>
          ))}
        </StudentWrapper>
      </Wrapper>

      <Footer />
    </>
  );
};

export default Profile;
