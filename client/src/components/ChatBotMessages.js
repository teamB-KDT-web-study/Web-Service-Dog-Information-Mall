import "../styles/chatbotmessages.scss";
import { Link } from "react-router-dom";


function ChatBotMessages({
  showChat,
  message,
  showHelp,
  showMap,
  showGradeInfo,
  showHelpDetail,
  complainMsg,
  sendComplainMsg,
  onChangeComplainMsg,
}) {

  return (
    <main className="ChatBotMessages">
      {message === undefined || message.user === undefined ? (
        <div></div>
      ) : (
        <div className={message.user.class}>
          <div className="chat">
            {message.user.message.map((el) => {
              if (el === "메세지") {
                return (
                  <div>
                    <textarea
                      type="text"
                      value={complainMsg}
                      onChange={onChangeComplainMsg}
                      className="sendtext"
                    />
                    <button onClick={sendComplainMsg} className="sendbtn">
                      보내기
                    </button>
                  </div>
                );
              } else if (el === "지도") {
                return <Link to={'/Map/' + message.user.where}>지도로 이동!</Link>;
              } else {
                return <div className={message.user.mode}>{el}</div>;
              }
            })}
          </div>
        </div>
      )}
      {message === undefined || message.bot === undefined ? (
        <div></div>
      ) : (
        <div className={message.bot.class}>
          <div className="chat">
            {message.bot.message.map((el, id) => {
              if (message.bot.mode === "info") {
                return (
                  <div
                    className={message.bot.mode}
                    onClick={() => showHelpDetail(id)}
                  >
                    {el}
                  </div>
                );
              } else {
                return <div className={message.bot.mode}>{el}</div>;
              }
            })}
          </div>
        </div>
      )}
      {message === undefined || message.system === undefined ? (
        <div></div>
      ) : (
        <div className="bot">
          <div className="chat">
            <div>다른 도움이 필요하신가요?</div>
            <div className="info" onClick={showHelp}>
              1. 고객센터 정보를 알려주세요.
            </div>
            <div className="info" onClick={showMap}>
              2. 근처 동물병원 위치를 보여주세요.
            </div>
            <div className="info" onClick={showGradeInfo}>
              3. 등급별 혜택 정보를 설명해주세요.
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default ChatBotMessages;
