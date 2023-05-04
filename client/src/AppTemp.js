// 임시 파일입니다!!! 나중에 삭제예정!!!!
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContentPage from "./pages/ContentPage";
import ContentDetail from "./pages/ContentDetail";
import ContentCreate from "./pages/ContentCreate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/board" element={<ContentPage />} />
          <Route path="/board/:contentId" element={<ContentDetail />} />
          <Route path="/board/create" element={<ContentCreate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
