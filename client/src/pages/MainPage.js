import { TrainingContainer } from "../containers/mainContainer";
import { ChatBotContainer } from "../containers/chatBotContainer";
import SlickSlider from "../components/SlickSlider";

const MainPage = () => {
  return (
    <>
      <p>임시 메인페이지</p>
      <SlickSlider />
      <TrainingContainer />
      <ChatBotContainer />
    </>
  );
};

export default MainPage;
