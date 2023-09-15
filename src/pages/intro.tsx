import styled from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";
import poster from "../assets/poster.png";

const ContentWrapper = styled.div`
  height: auto;
  min-height: 100%;
`;

const Poster = styled.img`
  width: 400px;
`;

const Text = styled.div`
  font-size: 24px;
  margin-top: auto;
  margin-left: 25px;
`;

const PostWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 150px 100px 50px;
`;

const DescWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px 50px;
  background: linear-gradient(249deg, #ba6c9e 17.33%, #f7bd96 75.55%);
`;

const DescText = styled.div`
  color: #4d4d4d;
  font-size: 22px;
  max-width: 500px;
  margin-left: 50px;
`;

const Temp = styled.div`
  width: 300px;
  height: 400px;
  background-color: darkgray;
`;

const Intro = () => {
  return (
    <>
      <Header />
      <ContentWrapper>
        <PostWrapper>
          <Poster src={poster} />
          <Text>2023 동양미래대학교 졸업전시회</Text>
        </PostWrapper>
        <DescWrapper>
          <Temp>1</Temp>
          <DescText>
            소리다.이것은 바이며, 우리 살 우리 가는 가슴이 사막이다. 능히 새
            얼음에 밝은 풍부하게 때문이다. 주는 인도하겠다는 못할 불어 것이다.
            구하지 크고 못할 것은 모래뿐일 끓는 목숨이 아름다우냐? 하였으며,
            사는가 주는 있는 무한한 위하여서 풍부하게 대고, 굳세게 황금시대다.
            바이며, 하였으며, 않는 붙잡아 가는 이상은 것이다. 소리다.이것은
            바이며, 우리 살 우리 가는 가슴이 사막이다. 능히 새 얼음에 밝은
            풍부하게 때문이다. 주는 인도하겠다는 못할 불어 것이다. 구하지 크고
            못할 것은 모래뿐일 끓는 목숨이 아름다우냐? 하였으며, 사는가 주는
            있는 무한한 위하여서 풍부하게 대고, 굳세게 황금시대다
          </DescText>
        </DescWrapper>
      </ContentWrapper>

      <Footer />
    </>
  );
};

export default Intro;
