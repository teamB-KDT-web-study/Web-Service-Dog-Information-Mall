import { TrainingContainer } from "../containers/mainContainer";
import { ChatBot } from "../components/ChatBot";
import SlickSlider from "../components/SlickSlider";
import Maindog from "./Maindog";
import Mainmydog from "./Mainmydog";
import Mainmap from "./Mainmap";
import Mainslide from "./Mainslide";
import TestLogin from "../components/TestLogin";

// import axios from "axios";
// import { useEffect } from "react";
// import { API_BASE_URL } from "../containers/app-config";

const MainPage = ({ getSession }) => {
  return (
    <>
      {/* <Mainslide /> */}
      <Maindog />

      <Mainmydog />
      <Mainmap />

      <TrainingContainer />
      <SlickSlider />
      <ChatBot />
      <TestLogin />
    </>
  );
};

export default MainPage;
