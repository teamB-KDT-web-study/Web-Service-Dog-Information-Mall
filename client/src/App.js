import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

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
import {
  BoardPageContainer,
  BoardDetailContainer,
  BoardCreateContainer,
} from "./containers/boardContainer";
import { TrainingContainer } from "./containers/mainContainer";
import Map from "./pages/Map";
import MapComponent from "./components/MapComponent";
import Traininginfo from "./pages/Traininginfo";
import Mydog from "./pages/Mydog";
import Mydoginfo from "./pages/Mydoginfo";
import EditMyProfile from "./pages/EditMyProfile";
import Footer from "./components/Footer";
import Store from "./pages/Store";
import Storefood from "./pages/Storefood";
import Storesnack from "./pages/Storesnack";
import StoreT from "./pages/StoreT";
import Storecushion from "./pages/Storecushion";
import Storedetail from "./pages/Storedetail";
import Storelead from "./pages/Storelead";
import StoreCart from "./pages/StoreCart";
//데이터
import shopDataNew from "./json/shopDataNew.json";
import { API_BASE_URL } from "./containers/app-config";

axios.defaults.withCredentials = true;

function App() {
  const [userId, setUserId] = useState({ isLogin: false });
  const getSession = async () => {
    const res = await axios.get(API_BASE_URL + "/member/checkLogin");
    setUserId(res.data);
  };
  const destroySession = async () => {
    const check = window.confirm("정말로 로그아웃 하시겠습니까?");
    if (check) {
      const res = await axios.delete(API_BASE_URL + "/member/logout");
      setUserId({ isLogin: false });
    }
  };
  useEffect(() => {
    const checkSession = async () => {
      const res = await axios.get(API_BASE_URL + "/member/checkLogin");
      setUserId(res.data);
    };
    checkSession();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header userId={userId} destroySession={destroySession} />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Login" element={<Login getSession={getSession} />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/MyPage" element={<MyPage />} />
          <Route path="/quizhome/quiz" element={<Quiz userId={userId} />} />
          <Route path="/quizhome" element={<Quizhome />} />
          <Route
            path="/board/page/:pageId"
            element={<BoardPageContainer userId={userId} />}
          />
          <Route
            path="/board/:contentId"
            element={<BoardDetailContainer userId={userId} />}
          />
          <Route
            path="/board/create"
            element={<BoardCreateContainer userId={userId} />}
          />
          <Route path="/Map" element={<Map />} />
          <Route path="/Map/:query" element={<MapComponent />} />
          <Route path="/training/traininginfo" element={<Traininginfo />} />
          <Route path="/training" element={<TrainingContainer />} />
          <Route path="/mydog" element={<Mydog />} />
          <Route path="/mydog/mydoginfo" element={<Mydoginfo />} />
          <Route path="/store" element={<Store Stores={shopDataNew} />} />

          <Route
            path="/store/food"
            element={<Storefood Stores={shopDataNew} />}
          />
          <Route
            path="/store/snack"
            element={<Storesnack Stores={shopDataNew} />}
          />
          <Route path="/store/t" element={<StoreT Stores={shopDataNew} />} />
          <Route
            path="/store/lead"
            element={<Storelead Stores={shopDataNew} />}
          />
          <Route
            path="/store/cushion"
            element={<Storecushion Stores={shopDataNew} />}
          />
          <Route path="/EditMyProfile" element={<EditMyProfile />} />
          <Route
            path="/store/:storeId"
            element={<Storedetail Stores={shopDataNew} />}
          />
          <Route
            path="/store/cart"
            element={<StoreCart Stores={shopDataNew} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
