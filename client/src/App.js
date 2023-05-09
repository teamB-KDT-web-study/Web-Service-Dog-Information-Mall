import { BrowserRouter, Route, Routes } from "react-router-dom";
// import css
import "./styles/_reset.scss";
// import pages
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyPage from "./pages/MyPage";
import Quiz from "./pages/Quiz";
import Quizhome from "./pages/Quizhome";
import ContentPage from "./pages/ContentPage";
import ContentDetail from "./pages/ContentDetail";
import ContentCreate from "./pages/ContentCreate";

import Map from "./pages/Map";

import Traininginfo from "./pages/Traininginfo";
import Training from "./pages/Training";
import Mydog from "./pages/Mydog";
import Mydoginfo from "./pages/Mydoginfo";
import EditMyProfile from "./pages/EditMyProfile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/MyPage" element={<MyPage />} />
          <Route path="/quizhome/quiz" element={<Quiz />} />
          <Route path="/quizhome" element={<Quizhome />} />
          <Route path="/board" element={<ContentPage />} />
          <Route path="/Map" element={<Map />} />
          <Route path="/board/:contentId" element={<ContentDetail />} />
          <Route path="/board/create" element={<ContentCreate />} />
          <Route path="/training/traininginfo" element={<Traininginfo />} />
          <Route path="/training" element={<Training />} />
          <Route path="/mydog" element={<Mydog />} />
          <Route path="/mydog/mydoginfo" element={<Mydoginfo />} />
          <Route path="/EditMyProfile" element={<EditMyProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
