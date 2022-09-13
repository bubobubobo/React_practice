import { useState } from 'react';
import styled from 'styled-components';

const CounterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20rem;
  margin: 20px auto;
  font-size: 1.5rem;
`;

const Modifier = styled.button`
  width: 5rem;
  height: 2.5rem;
  font-size: 1.25rem;
  line-height: 1.25rem;
  background-color: lime;
  border: initial;
  outline: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    box-shadow: 2px 2px 2px green;
  }
`;

const Pannel = styled.div`
  width: 50px;
  text-align: center;
`;

const Counter = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    count > 0 && setCount(count - 1);
  };

  return (
    <CounterContainer>
      <Modifier onClick={increase}>
        <i className="bx bx-plus-circle"></i>
      </Modifier>
      <Pannel>{count}</Pannel>
      <Modifier onClick={decrease}>
        <i className="bx bx-minus-circle"></i>
      </Modifier>
    </CounterContainer>
  );
};

export default Counter;
