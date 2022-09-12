import { ThemeProvider } from 'styled-components';
import Main from './components/Section';

import GlobalStyle from './style/GlobalStyle';
import mixins from './style/mixins';

function App() {
  return (
    <>
      <GlobalStyle />
      {/* ThemeProvider requires theme props */}
      <ThemeProvider theme={{ ...mixins }}>
        <Main />
      </ThemeProvider>
    </>
  );
}

export default App;
