import styled from 'styled-components';
import Counter from './Counter';

const Title = styled.h1`
  color: #db5b33;
  font-weight: 300;
  text-align: center;
`;

function App() {
  return (
    <div className="App">
      <Title>Counter</Title>
      <Counter />
    </div>
  );
}

export default App;
