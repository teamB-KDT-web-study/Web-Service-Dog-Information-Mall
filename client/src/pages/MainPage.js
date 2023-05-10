import { TrainingContainer } from "../containers/mainContainer";
import { ChatBotContainer } from "../containers/chatBotContainer";
import SlickSlider from "../components/SlickSlider";

const MainPage = () => {
  return (
    <>
      <SlickSlider />
      <TrainingContainer />
      <ChatBotContainer />
    </>
  );
};

export default MainPage;
