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

const MainPage = ({ getSession }) => {
  return (
    <>
      {/* <Mainslide /> */}
      <Maindog />
      <SlickSlider />
      <TrainingContainer />
      <Mainmydog />
      <Mainmap />
      <ChatBot />
      <TestLogin />
    </>
  );
};

export default MainPage;
