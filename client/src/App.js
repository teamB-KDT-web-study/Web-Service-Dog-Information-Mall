import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import Quiz from "./pages/Quiz";
import Quizhome from "./pages/Quizhome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/quizhome" element={<Quizhome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
