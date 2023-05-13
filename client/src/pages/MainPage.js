import { TrainingContainer } from "../containers/mainContainer";
import { ChatBot } from "../components/ChatBot";
import SlickSlider from "../components/SlickSlider";
// import axios from "axios";
// import { useEffect } from "react";
// import { API_BASE_URL } from "../containers/app-config";

const MainPage = ({ getSession }) => {
  return (
    <>
      <SlickSlider />

      <TrainingContainer />
      <ChatBot />
    </>
  );
};

export default MainPage;
