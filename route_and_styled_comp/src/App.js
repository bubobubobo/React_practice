import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Cat from "./components/Cat";
import Dog from "./components/Dog";
import Fish from "./components/Fish";

/**
 * Simple practice for react-router & styled component
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="cat" element={<Cat />} />
          <Route path="dog" element={<Dog />} />
          <Route path="fish" element={<Fish />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
