import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
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
import { TrainingContainer } from "./containers/mainContainer";
import Map from "./pages/Map";
import Traininginfo from "./pages/Traininginfo";
import Mydog from "./pages/Mydog";
import Mydoginfo from "./pages/Mydoginfo";
import Store from "./pages/Store";
import Storedetail from "./pages/Storedetail";

function App() {
  const [Stores, setStores] = useState([
    {
      id: 1,
      title: "더마독 관절 ",
      category: "강아지 사료",
      choice: { weight: ["1kg", "5kg", "10kg"] },
      image:
        "https://shopping-phinf.pstatic.net/main_1933080/19330803748.20230307184337.jpg",
      price: 26400,
      amount: 50,
    },
    {
      id: 2,
      title: "라비앙독 대용량 개 애견 샘플 연어 4.8kg",
      category: "강아지 사료",
      choice: { weight: ["1kg", "5kg", "10kg"] },
      image:
        "https://shopping-phinf.pstatic.net/main_8308052/83080523741.10.jpg",
      price: 39900,
      amount: 50,
    },
    {
      id: 3,
      title: "NOW 그레인프리 스몰브리드 어덜트",
      category: "강아지 사료",
      choice: { weight: ["1kg", "5kg", "10kg"] },
      image:
        "https://shopping-phinf.pstatic.net/main_1232582/12325828530.20210121101943.jpg",
      price: 17790,
      amount: 50,
    },
    {
      id: 4,
      title: "로반 잘먹잘싸 눈물 피부 모질 황금변",
      category: "강아지 사료",
      choice: { weight: ["1kg", "5kg", "10kg"] },
      image:
        "https://shopping-phinf.pstatic.net/main_3819757/38197578618.20230223105502.jpg",
      price: 21800,
      amount: 50,
    },
    {
      id: 5,
      title: "로반 잘먹잘싸 기호성좋은 연어",
      category: "강아지 사료",
      choice: { weight: ["1kg", "5kg", "10kg"] },
      image:
        "https://shopping-phinf.pstatic.net/main_3752457/37524570621.20230130114937.jpg",
      price: 17800,
      amount: 50,
    },
    {
      id: 6,
      title: "네이처알로  고소애 황태 눈물 알러지 곤충",
      category: "강아지 사료",
      choice: { weight: ["1kg", "5kg", "10kg"] },
      image:
        "https://shopping-phinf.pstatic.net/main_3820265/38202657619.20230223170058.jpg",
      price: 26800,
      amount: 50,
    },
    {
      id: 7,
      title: "더마독 피부 모질 건강",
      category: "강아지 사료",
      choice: { weight: ["1kg", "5kg", "10kg"] },
      image:
        "https://shopping-phinf.pstatic.net/main_1933091/19330910518.20230307184447.jpg",
      price: 26400,
      amount: 50,
    },
    {
      id: 8,
      title: "아카나 독 프리런덕 ",
      category: "강아지 사료",
      choice: { weight: ["1kg", "5kg", "10kg"] },
      image:
        "https://shopping-phinf.pstatic.net/main_1497939/14979398409.20180806094515.jpg",
      price: 15900,
      amount: 50,
    },
    {
      id: 9,
      title: "로얄캐닌 미니 인도어 퍼피",
      category: "강아지 사료",
      choice: { weight: ["1kg", "5kg", "10kg"] },
      image:
        "https://shopping-phinf.pstatic.net/main_1597763/15977632163.20181105105707.jpg",
      price: 6600,
      amount: 50,
    },
    {
      id: 10,
      title: "네츄럴코어 네츄럴 코어 치킨 연어 ",
      category: "강아지 사료",
      choice: { weight: ["1kg", "5kg", "10kg"] },
      image:
        "https://shopping-phinf.pstatic.net/main_2088096/20880964236.20190916102141.jpg",
      price: 37730,
      amount: 50,
    },

    {
      id: 11,
      title: " 소형견 중형견  아띠지기 S",
      category: "강아지 목줄",
      choice: { length: ["1m", "1.5m", "2m"] },
      image:
        "https://shopping-phinf.pstatic.net/main_1344132/13441328487.4.jpg",
      price: 5900,
      amount: 50,
    },
    {
      id: 12,
      title: "튼튼한  소형견 중형견  NOMA S",
      category: "강아지 목줄",
      choice: { length: ["1m", "1.5m", "2m"] },
      image:
        "https://shopping-phinf.pstatic.net/main_8218511/82185114311.1.jpg",
      price: 11200,
      amount: 50,
    },
    {
      id: 13,
      title: "유봉펫  소형견 중형견",
      category: "강아지 목줄",
      choice: { length: ["1m", "1.5m", "2m"] },
      image:
        "https://shopping-phinf.pstatic.net/main_3029998/30299987536.20230213194104.jpg",
      price: 9900,
      amount: 50,
    },
    {
      id: 14,
      title: " 이름각인 순면 애견 산책줄",
      category: "강아지 목줄",
      choice: { length: ["1m", "1.5m", "2m"] },
      image: "https://shopping-phinf.pstatic.net/main_8445396/84453960332.jpg",
      price: 6900,
      amount: 50,
    },
    {
      id: 15,
      title: "5H펫 훈련용 교육용  소형견 중형견  리드줄 S",
      category: "강아지 목줄",
      choice: { length: ["1m", "1.5m", "2m"] },
      image:
        "https://shopping-phinf.pstatic.net/main_8228891/82288916414.3.jpg",
      price: 6500,
      amount: 50,
    },
    {
      id: 16,
      title: "진돗개 리트리버 큰개 중형견 샬롯제이",
      category: "강아지 목줄",
      choice: { length: ["1m", "1.5m", "2m"] },
      image:
        "https://shopping-phinf.pstatic.net/main_8568783/85687838645.1.jpg",
      price: 21000,
      amount: 50,
    },
    {
      id: 17,
      title: "인히어런트 마카롱 ",
      category: "강아지 목줄",
      choice: { length: ["1m", "1.5m", "2m"] },
      image:
        "https://shopping-phinf.pstatic.net/main_2153346/21533463977.20191216103722.jpg",
      price: 8500,
      amount: 50,
    },
    {
      id: 18,
      title: "벤트라  아쿠아 방수목줄 S",
      category: "강아지 목줄",
      choice: { length: ["1m", "1.5m", "2m"] },
      image:
        "https://shopping-phinf.pstatic.net/main_8226713/82267134415.3.jpg",
      price: 19000,
      amount: 50,
    },
    {
      id: 19,
      title:
        "핀치칼라 프롱칼라 훈련용 초크체인 맹견 반려견  행동교정 음전 A small",
      category: "강아지 목줄",
      choice: { length: ["1m", "1.5m", "2m"] },
      image:
        "https://shopping-phinf.pstatic.net/main_8450852/84508527253.2.jpg",
      price: 12000,
      amount: 50,
    },
    {
      id: 20,
      title: "초경량  S",
      category: "강아지 목줄",
      choice: { length: ["1m", "1.5m", "2m"] },
      image:
        "https://shopping-phinf.pstatic.net/main_8240824/82408243816.17.jpg",
      price: 9900,
      amount: 50,
    },

    {
      id: 21,
      title: " 수제  보양식 오리목뼈 100g+100g  반려견",
      category: "강아지 간식",
      choice: { piece: ["5", "10", "20"] },
      image:
        "https://shopping-phinf.pstatic.net/main_8244001/82440011828.9.jpg",
      price: 4500,
      amount: 50,
    },
    {
      id: 22,
      title: "더올바른 반려견 수제  치킨우유스틱 300g",
      category: "강아지 간식",
      choice: { piece: ["5", "10", "20"] },
      image:
        "https://shopping-phinf.pstatic.net/main_8229559/82295592873.37.jpg",
      price: 2190,
      amount: 50,
    },
    {
      id: 23,
      title: " 닭가슴살 육포 수제  다이어트 노견 보양식",
      category: "강아지 간식",
      choice: { piece: ["5", "10", "20"] },
      image:
        "https://shopping-phinf.pstatic.net/main_1238910/12389109131.1.jpg",
      price: 3300,
      amount: 50,
    },
    {
      id: 24,
      title: "네이월 오리황태말이 6P",
      category: "강아지 간식",
      choice: { piece: ["5", "10", "20"] },
      image:
        "https://shopping-phinf.pstatic.net/main_3692636/36926361619.20230310152444.jpg",
      price: 3800,
      amount: 50,
    },
    {
      id: 25,
      title: "독특  수제  치킨(3pcs) 멍치킨",
      category: "강아지 간식",
      choice: { piece: ["5", "10", "20"] },
      image:
        "https://shopping-phinf.pstatic.net/main_8331598/83315986802.3.jpg",
      price: 7900,
      amount: 50,
    },
    {
      id: 26,
      title: " 황태 수제 보양식 황태채 50g",
      category: "강아지 간식",
      choice: { piece: ["5", "10", "20"] },
      image: "https://shopping-phinf.pstatic.net/main_8224468/82244688588.jpg",
      price: 5500,
      amount: 50,
    },
    {
      id: 27,
      title: "견묘상점 한우우피치킨말이 치석제거 국내산  수제 ",
      category: "강아지 간식",
      choice: { piece: ["5", "10", "20"] },
      image:
        "https://shopping-phinf.pstatic.net/main_8474729/84747291048.4.jpg",
      price: 5600,
      amount: 50,
    },
    {
      id: 29,
      title: "후코이단  대용량 130g  트릿 수제",
      category: "강아지 간식",
      choice: { piece: ["5", "10", "20"] },
      image: "https://shopping-phinf.pstatic.net/main_8346311/83463115573.jpg",
      price: 8000,
      amount: 50,
    },
    {
      id: 30,
      title: "수제 오리목뼈 500g ",
      category: "강아지 간식",
      choice: { piece: ["5", "10", "20"] },
      image:
        "https://shopping-phinf.pstatic.net/main_1300718/13007183296.33.jpg",
      price: 6900,
      amount: 50,
    },
    {
      id: 31,
      title: "수제 쫀득 오리안심",
      category: "강아지 간식",
      choice: { piece: ["5", "10", "20"] },
      image:
        "https://shopping-phinf.pstatic.net/main_8311935/83119355547.7.jpg",
      price: 4400,
      amount: 50,
    },

    {
      id: 32,
      title: "강아지 방석 고양이 커버분리 M",
      category: "강아지 쿠션",
      choice: { width: ["20cm", "30cm", "50cm"] },
      image:
        "https://shopping-phinf.pstatic.net/main_8265318/82653182728.7.jpg",
      price: 24800,
      amount: 50,
    },
    {
      id: 33,
      title: "COZY 코지 마약방석 S",
      category: "강아지 쿠션",
      choice: { width: ["20cm", "30cm", "50cm"] },
      image:
        "https://shopping-phinf.pstatic.net/main_8293758/82937582704.2.jpg",
      price: 6900,
      amount: 50,
    },
    {
      id: 34,
      title: "펫브랜디 강아지방석 마약방석 면그레이L",
      category: "강아지 쿠션",
      choice: { width: ["20cm", "30cm", "50cm"] },
      image:
        "https://shopping-phinf.pstatic.net/main_8319677/83196778686.12.jpg",
      price: 19800,
      amount: 50,
    },
    {
      id: 35,
      title: "페스텝  이중누빔 탄탄이 베개일체형 방석",
      category: "강아지 쿠션",
      choice: { width: ["20cm", "30cm", "50cm"] },
      image:
        "https://shopping-phinf.pstatic.net/main_2797208/27972083134.20230504090955.jpg",
      price: 19800,
      amount: 50,
    },
    {
      id: 36,
      title: "마약 반려견 꿀잠 무중력 사각 쿠션 S",
      category: "강아지 쿠션",
      choice: { width: ["20cm", "30cm", "50cm"] },
      image:
        "https://shopping-phinf.pstatic.net/main_8332757/83327571025.6.jpg",
      price: 29900,
      amount: 50,
    },
    {
      id: 37,
      title:
        "펫블링 진드기방지 코자방석 강아지 사계절 방수 꿀잠 커버분리 마약방석 M(60x60x5)",
      category: "강아지 쿠션",
      choice: { width: ["20cm", "30cm", "50cm"] },
      image:
        "https://shopping-phinf.pstatic.net/main_8360508/83605085746.3.jpg",
      price: 17900,
      amount: 50,
    },
    {
      id: 38,
      title: " 극세사 쿠션 바나나방석",
      category: "강아지 쿠션",
      choice: { width: ["20cm", "30cm", "50cm"] },
      image:
        "https://shopping-phinf.pstatic.net/main_3785797/37857978173.20230215170634.jpg",
      price: 7500,
      amount: 50,
    },
    {
      id: 39,
      title: "퍼플펫 도넛 소파 침대 코지 화이트양면방석 중형",
      category: "강아지 쿠션",
      choice: { width: ["20cm", "30cm", "50cm"] },
      image:
        "https://shopping-phinf.pstatic.net/main_8483143/84831434567.1.jpg",
      price: 14900,
      amount: 50,
    },
    {
      id: 40,
      title: "라운딩 사각 유모차 켄넬 애견방석 그레이 중형",
      category: "강아지 쿠션",
      choice: { width: ["20cm", "30cm", "50cm"] },
      image:
        "https://shopping-phinf.pstatic.net/main_1135328/11353284707.1.jpg",
      price: 12800,
      amount: 50,
    },
    {
      id: 41,
      title: "방석 침대  방석 반려견 ",
      category: "강아지 쿠션",
      choice: { width: ["20cm", "30cm", "50cm"] },
      image: "https://shopping-phinf.pstatic.net/main_8570363/85703631179.jpg",
      price: 20000,
      amount: 50,
    },

    {
      id: 42,
      title: "개꿀이냥 썸머 나시 원피스",
      category: "강아지 옷",
      choice: { size: ["small", "medium", "large"] },
      image:
        "https://shopping-phinf.pstatic.net/main_8296995/82969958034.5.jpg",
      price: 5800,
      amount: 50,
    },
    {
      id: 43,
      title: "매그독 시원한 여름 원피스",
      category: "강아지 옷",
      choice: { size: ["small", "medium", "large"] },
      image:
        "https://shopping-phinf.pstatic.net/main_8229507/82295074411.8.jpg",
      price: 7800,
      amount: 50,
    },
    {
      id: 44,
      title: "티셔츠 봄 여름 실내복 베이직 펀칭티 S",
      category: "강아지 옷",
      choice: { size: ["small", "medium", "large"] },
      image:
        "https://shopping-phinf.pstatic.net/main_9624183/9624183812.108.jpg",
      price: 7800,
      amount: 50,
    },
    {
      id: 45,
      title: "오렌지원 하트 뿅뿅 나시 봄 여름옷 티셔츠",
      category: "강아지 옷",
      choice: { size: ["small", "medium", "large"] },
      image:
        "https://shopping-phinf.pstatic.net/main_8292871/82928712958.39.jpg",
      price: 5900,
      amount: 50,
    },
    {
      id: 46,
      title: "쁘띠나시 강아지여름옷",
      category: "강아지 옷",
      choice: { size: ["small", "medium", "large"] },
      image:
        "https://shopping-phinf.pstatic.net/main_8305523/83055235313.17.jpg",
      price: 9800,
      amount: 50,
    },
    {
      id: 47,
      title: "강아지오가닉 실내복 잠옷 순면 내복 곰돌이 S",
      category: "강아지 옷",
      choice: { size: ["small", "medium", "large"] },
      image:
        "https://shopping-phinf.pstatic.net/main_8281897/82818977661.4.jpg",
      price: 8900,
      amount: 50,
    },
    {
      id: 48,
      title: "데일리 스트라이프 티셔츠",
      category: "강아지 옷",
      choice: { size: ["small", "medium", "large"] },
      image:
        "https://shopping-phinf.pstatic.net/main_8529775/85297757501.4.jpg",
      price: 5900,
      amount: 50,
    },
    {
      id: 49,
      title: "여름 크롭티 데일리 강아지 나시 티셔츠",
      category: "강아지 옷",
      choice: { size: ["small", "medium", "large"] },
      image:
        "https://shopping-phinf.pstatic.net/main_8195094/81950947515.57.jpg",
      price: 9900,
      amount: 50,
    },
    {
      id: 50,
      title: "여름 크롭티 플라워 홀터넥 나시 티셔츠 S",
      category: "강아지 옷",
      choice: { size: ["small", "medium", "large"] },
      image: "https://shopping-phinf.pstatic.net/main_8042120/80421201016.jpg",
      price: 12000,
      amount: 50,
    },
    {
      id: 51,
      title: " 고양이옷 데일리 티셔츠,실내복,외출복",
      category: "강아지 옷",
      choice: { size: ["small", "medium", "large"] },
      image:
        "https://shopping-phinf.pstatic.net/main_8325410/83254102563.44.jpg",
      price: 6500,
      amount: 50,
    },
  ]);
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
          <Route path="/board/page/:pageId" element={<BoardPageContainer />} />
          <Route
            path="/board/searchPage/:pageId"
            element={<BoardPageContainer />}
          />
          <Route path="/board/:contentId" element={<BoardDetailContainer />} />
          <Route path="/board/create" element={<BoardCreateContainer />} />
          <Route path="/Map" element={<Map />} />
          <Route path="/training/traininginfo" element={<Traininginfo />} />
          <Route path="/training" element={<TrainingContainer />} />
          <Route path="/mydog" element={<Mydog />} />
          <Route path="/mydog/mydoginfo" element={<Mydoginfo />} />
          <Route path="/store" element={<Store Stores={Stores} />} />
          <Route
            path="/store/:storeId"
            element={<Storedetail Stores={Stores} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
