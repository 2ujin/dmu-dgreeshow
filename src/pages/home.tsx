
import styled from 'styled-components';
import Footer from '../components/footer';
import Header from '../components/header';

const HomeWrapper = styled.div`
  background-color: #D9D9D9;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Home = () => {
  return (
    <HomeWrapper>
      <Header />
      {/* <Footer /> */}
    </HomeWrapper>
  );
};

export default Home;