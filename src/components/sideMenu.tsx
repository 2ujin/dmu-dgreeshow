import styled from "styled-components";
import "../App.css";
import i_close from "../assets/icons/i_close.svg";
import { NavLink } from "react-router-dom";

const ModalWrapper = styled.div`
  height: 100vh;
  width: 160px;
  background-color: #fff;
  position: absolute;
  z-index: 100000;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  text-align: right;
  align-items: flex-end;
  font-size: 14px;

  .line {
    width: 100%;
    height: 1px;
    background-color: #984678;
  }
`;

const Icon = styled.img`
  width: 20px;
  margin: 10px;
  margin-top: 15px;
  margin-right: auto;
`;

const TextWrapper = styled.div`
  border-top: 1px solid #984678;
  padding: 10px;
  color: #404040;
  text-align: right;
  font-size: 20px;
  font-weight: 700;
  line-height: 116.467%;
  width: 100%;

  &.small {
    font-size: 15px;
  }
`;

const TextShortWrapper = styled.div`
  border-top: 1px solid #984678;
  padding: 10px;
  color: #404040;
  text-align: right;
  font-size: 20px;
  font-weight: 700;
  line-height: 116.467%;
  width: 80%;
  justify-content: right;
  &.small {
    font-size: 15px;
  }
`;

const SnsWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  line-height: 22px;
  padding-right: 10px;
  font-size: 14px;
  position: absolute;
  bottom: 60px;
`;

const SideMenu = (props: { data: any; state: any; closeModal: any }) => {
  const { state, closeModal } = props;

  return state ? (
    <>
      <ModalWrapper>
        <Icon src={i_close} onClick={(event: any) => closeModal(event)} />
        <TextWrapper>
          <NavLink to="/intro">intro</NavLink>
        </TextWrapper>
        <TextWrapper>
          <NavLink to="/profile">profile</NavLink>
        </TextWrapper>
        <TextWrapper>
          <NavLink to="/design"> project</NavLink>
        </TextWrapper>
        <TextWrapper className="small">
          <NavLink to="/design">복합공간설계</NavLink>
        </TextWrapper>
        <TextShortWrapper className="small">
          <NavLink to="/furniture">가구디자인</NavLink>
        </TextShortWrapper>
        {/* <TextShortWrapper
          onClick={() => alert("10월 16일 오픈 예정입니다~!~!!")}
        >
          코디네이션
        </TextShortWrapper> */}
        <TextShortWrapper>
          <NavLink to="/event">event</NavLink>
        </TextShortWrapper>
        <div className="line"></div>

        <SnsWrapper>
          instagram <br />
          <a
            href="https://instagram.com/dmu_degreeshow?igshid=MzRlODBiNWFlZA=="
            target="_blank"
          >
            @dmu_degreeshow
          </a>
          <br />
          <br />
          youtube <br />
          <a href="https://www.youtube.com/@dmushow7083" target="_blank">
            @dmushow7083
          </a>
        </SnsWrapper>
      </ModalWrapper>
    </>
  ) : (
    <></>
  );
};

export default SideMenu;
