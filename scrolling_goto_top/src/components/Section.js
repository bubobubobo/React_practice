import styled from 'styled-components';
import GotoTop from './GotoTop';

const Title = styled.h1`
  color: #db5b33;
  font-weight: 300;
  text-align: center;
`;

const Article = styled.article`
  height: 100vh;
  ${props => props.theme.flexbox()}
  color: #fff;
  font-size: 3em;
  font-weight: 400;

  &:nth-of-type(even) {
    background: rgb(34, 185, 255);
  }

  &:nth-of-type(odd) {
    background: rgb(100, 78, 226);
  }
`;

const Main = () => {
  const sections = [1, 2, 3, 4];

  return (
    <>
      <Title>Scrolling goto top</Title>
      {sections.map((sec, idx) => (
        <Article key={idx}>Section {sec}</Article>
      ))}
      <GotoTop />
    </>
  );
};

export default Main;
