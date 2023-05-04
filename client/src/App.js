import { BrowserRouter, Route, Routes } from "react-router-dom";
// import css
import "./styles/_reset.scss";
// import pages
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Quiz from "./pages/Quiz";
import Quizhome from "./pages/Quizhome";
import ContentPage from "./pages/ContentPage";
import ContentDetail from "./pages/ContentDetail";
import ContentCreate from "./pages/ContentCreate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/quizhome/quiz" element={<Quiz />} />
          <Route path="/quizhome" element={<Quizhome />} />
          <Route path="/board" element={<ContentPage />} />
          <Route path="/board/:contentId" element={<ContentDetail />} />
          <Route path="/board/create" element={<ContentCreate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
