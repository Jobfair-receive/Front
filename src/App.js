import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Test from "./pages/Test/Test";
import Chat from "./pages/Chat/Chat";
import Header from "./components/common/Header";

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/test" element={<Test />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
    </>
  );
}

export default App;
