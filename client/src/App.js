import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from './containers/app-config.js';

// import css
import './styles/_reset.scss';
// import pages
import Header from './components/Header';
import MainPage from './pages/MainPage';
import Login from './pages/Login';
import Register from './pages/Register';
import MyPage from './pages/MyPage';
import Quiz from './pages/Quiz';
import Quizhome from './pages/Quizhome';
import {
  BoardPageContainer,
  BoardDetailContainer,
  BoardCreateContainer,
} from './containers/boardContainer';
import { TrainingContainer } from './containers/mainContainer';
import Map from './pages/Map';
import Traininginfo from './pages/Traininginfo';
import Mydog from './pages/Mydog';
import Mydoginfo from './pages/Mydoginfo';
import EditMyProfile from './pages/EditMyProfile';
import Footer from './components/Footer';
import Store from './pages/Store';
import Storefood from './pages/Storefood';
import Storesnack from './pages/Storesnack';
import StoreT from './pages/StoreT';
import Storecushion from './pages/Storecushion';
import Storedetail from './pages/Storedetail';
import Storelead from './pages/Storelead';
import StoreCart from './pages/StoreCart';

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
          <Route path="/board/page/:pageId" element={<BoardPageContainer />} />
          <Route path="/board/:contentId" element={<BoardDetailContainer />} />
          <Route path="/board/create" element={<BoardCreateContainer />} />
          <Route path="/Map" element={<Map />} />
          <Route path="/training/traininginfo" element={<Traininginfo />} />
          <Route path="/training" element={<TrainingContainer />} />
          <Route path="/mydog" element={<Mydog />} />
          <Route path="/mydog/mydoginfo" element={<Mydoginfo />} />
          <Route path="/store" element={<Store />} />
          <Route path="/store/item/:storeId" element={<Storedetail />} />
          <Route path="/store/:category" element={<Store />} />

          {/* <Route path="/store/food" element={<Storefood />} />
          <Route path="/store/snack" element={<Storesnack />} />
          <Route path="/store/t" element={<StoreT />} />
          <Route path="/store/lead" element={<Storelead />} />
          <Route path="/store/cushion" element={<Storecushion />} /> */}
          <Route path="/EditMyProfile" element={<EditMyProfile />} />
          <Route path="/store/cart" element={<StoreCart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
