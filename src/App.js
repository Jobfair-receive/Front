import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Test from "./pages/Test/Test";
import Chat from "./pages/Chat/Chat";
import Header from "./components/common/Header";
import View from "./pages/Chat/View";

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/test" element={<Test />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/view" element={<View />} />
    </Routes>
    </>
  );
}

export default App;
