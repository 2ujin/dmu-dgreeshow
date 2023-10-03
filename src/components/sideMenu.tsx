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
`;

const SnsWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  line-height: 22px;
  padding-right: 10px;
  font-size: 14px;
`;

const SideMenu = (props: { data: any; state: any; closeModal: any }) => {
  const { data, state, closeModal } = props;

  return state ? (
    <>
      <ModalWrapper>
        <Icon src={i_close} onClick={(event: any) => closeModal(event)} />
        <TextWrapper>
          <NavLink to="/intro">intro</NavLink>
        </TextWrapper>
        <TextWrapper>profile</TextWrapper>
        <TextWrapper>project</TextWrapper>
        <TextWrapper>복합공간설계</TextWrapper>
        <TextShortWrapper>가구디자인</TextShortWrapper>
        <TextShortWrapper>코디네이션</TextShortWrapper>
        <TextShortWrapper>
          <NavLink to="/event">event</NavLink>
        </TextShortWrapper>
        <div className="line"></div>

        <SnsWrapper>
          instagram <br />
          @dmu_dgreeshow <br />
          <br />
          youtube
        </SnsWrapper>
      </ModalWrapper>
    </>
  ) : (
    <></>
  );
};

export default SideMenu;
