import styled from 'styled-components';
import logo from "../assets/univ_logo.png";

const FooterWrapper = styled.div`
  background-color: #ffffff;
  padding: 22px 35px;
  height: 100px;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 90%;
  flex: 1;
`;

const TextImgWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.div`
  font-size: 12px;
  margin-left: 10px;
`;

const Img = styled.img`
  width: 60px;
  margin-bottom: 12px;
`;

const Footer = ({ isLine = false }) => {
  return (
    <FooterWrapper style={{ borderTop: isLine ? "1px solid gray" : "" }}>
      <Text> 동양미래대학교 실내건축디자인과</Text>
      <br />
      <TextImgWrapper>
        <TextWrapper>
          <Text> 오프라인 전시장소</Text>
          <Text>① 동양미래대학교 6호관 1F / 6-B1 DM Gallery</Text>
          <Text>
            ② 08221 서울시 구로구 경인로 445 ([구]고척동 62-160) 동양미래대학교
          </Text>
          <Text> Instagram @dmu_dgreeshow</Text>
          <Text> Youtube 채널명</Text>
        </TextWrapper>
        <Img src={logo}></Img>
      </TextImgWrapper>
    </FooterWrapper>
  );
};

export default Footer;