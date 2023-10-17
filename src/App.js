import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Test from "./pages/Test/Test";
import Chat from "./pages/Chat/Chat";
import Header from "./components/common/Header";
import Result from "./pages/Result/Result";

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/test" element={<Test />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/result" element={<Result />} />
    </Routes>
    </>
  );
}

export default App;
