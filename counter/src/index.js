import ReactDOM from 'react-dom/client';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import App from './App';

const GlobalStyle = createGlobalStyle`
 * {
  box-sizing : border-box;
 }
 body {
  font-family: 'Open Sans';
  font-weight: 300;
 }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={{}}>
      <App />
    </ThemeProvider>
  </>
);
