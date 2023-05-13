import { TrainingContainer } from "../containers/mainContainer";
import { ChatBot } from "../components/ChatBot";
import SlickSlider from "../components/SlickSlider";
import Maindog from "./Maindog";
import Mainmydog from "./Mainmydog";
import Mainmap from "./Mainmap";
import Mainslide from "./Mainslide";

// import axios from "axios";
// import { useEffect } from "react";
// import { API_BASE_URL } from "../containers/app-config";

const MainPage = ({ getSession }) => {
  return (
    <>
      <Mainslide />
      {/* <Maindog /> */}
      {/* <SlickSlider /> */}
      <Mainmydog />
      <Mainmap />
      <TrainingContainer />
      <ChatBot />
    </>
  );
};

export default MainPage;
