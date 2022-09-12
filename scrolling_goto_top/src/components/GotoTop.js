import styled, { keyframes } from 'styled-components';

const glow = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
    transform: translate3D(-50%, 10px, 0);
  }
`;

const ScrollIcon = styled.div`
  position: fixed;
  left: 50%;
  bottom: 20px;
  transform: translate3D(-50%, 0, 0);
  font-size: 3em;
  color: #fff;
  cursor: pointer;
  animation: ${glow} 4s infinite;
  // display: none;
`;

const GotoTop = () => <ScrollIcon className="scroll-icon bx bxs-chevrons-up"></ScrollIcon>;

export default GotoTop;
