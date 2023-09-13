import styled from "styled-components";
import logo from "../assets/logo.svg";

const SubHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.5);
  position: absolute;
  top: 45px;
  padding: 10px 20px;
  border-radius: 9px;
  line-height: 35px;
`;

const SubItem = styled.div`
  font-size: 12px;
`;

const SubHeader = () => {
  return (
    <SubHeaderWrapper>
      <SubItem>복합공간설계</SubItem>
      <SubItem>가구디자인</SubItem>
      <SubItem>코디네이션</SubItem>
    </SubHeaderWrapper>
  );
};

export default SubHeader;
