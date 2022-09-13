import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useScrollY from '../Hooks/Scroll';
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
  const articles = [1, 2, 3, 4];

  // state
  const [showGotoTop, setShowGotoTop] = useState(false);

  // custom Hook
  const [scrollY, setScrollY] = useScrollY();

  useEffect(() => {
    if (scrollY > 300) setShowGotoTop(true);
    else setShowGotoTop(false);
  }, [scrollY]);

  const gotoTop = () => {
    // default smooth behavior
    setScrollY(0);
  };

  return (
    <>
      <Title>Scrolling goto top</Title>
      {articles.map((sec, idx) => (
        <Article key={idx}>Section {sec}</Article>
      ))}
      {showGotoTop && <GotoTop gotoTop={gotoTop} />}
    </>
  );
};

export default Main;
