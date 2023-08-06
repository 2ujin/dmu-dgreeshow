import styled from 'styled-components';

const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
    padding: 20px;
`;

const _Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 450px;
`;

const Text = styled.div`
  font-size: 12px;
`

const Header = () => {
  return <HeaderWrapper>
  <_Header>
    <Text>Home</Text>
    <Text>A</Text>
    <Text>B</Text>
    <Text>C</Text>
    <Text>Event</Text>
  </_Header>
  </HeaderWrapper> ;
};

export default Header;