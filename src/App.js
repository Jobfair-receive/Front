import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Test from "./pages/Test/Test";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<Test />} />
    </Routes>

  );
}

export default App;
