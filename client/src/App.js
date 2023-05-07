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
import {
  BoardPageContainer,
  BoardDetailContainer,
  BoardCreateContainer,
} from "./containers/boardContainer";

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
          <Route path="/board" element={<BoardPageContainer />} />
          <Route path="/board/:contentId" element={<BoardDetailContainer />} />
          <Route path="/board/create" element={<BoardCreateContainer />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
