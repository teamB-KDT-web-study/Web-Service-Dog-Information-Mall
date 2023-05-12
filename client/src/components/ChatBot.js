import "../styles/chatBot.scss";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ChatBotMessages from "./ChatBotMessages";
import Swal from "sweetalert2";

export function ChatBot() {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [complainMsg, setComplainMsg] = useState("");
  const scrollRef = useRef();
  useEffect(() => {
    setMessages([]);
  }, [showChat]);
  useEffect(() => {
    if (showChat) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);
  const navigate = useNavigate();
  const showChatBox = () => {
    setShowChat(!showChat);
  };
  const closeChatBox = () => {
    setShowChat(!showChat);
  };
  const showGradeInfo = () => {
    const msg = {
      user: {
        class: "user",
        message: ["등급별 혜택 정보를 설명해주세요!"],
        mode: "basic",
      },
      bot: {
        class: "bot",
        message: [
          "서먹서먹 등급: 처음 등록시 부여되는 등급으로, 따로 부여되는 혜택이 없습니다.",
          "드문드문 등급: 퀴즈 Step1을 이수시 부여되는 등급으로, 스토어 이용시 3%의 할인 적용이 가능합니다.",
          "친구 등급: ~~",
          "베스트프렌드 등급: ~~~",
        ],
        mode: "basic",
      },
      system: {},
    };
    setMessages([...messages, msg]);
  };
  const showMap = () => {
    navigate("/Map");
  };
  const showHelp = () => {
    const msg = {
      user: {
        class: "user",
        message: ["고객센터 정보를 알려주세요!"],
        mode: "basic",
      },
      bot: {
        class: "bot",
        message: [
          "1. 고객센터에 전화로 문의하기",
          "2. 고객센터에 메세지로 문의하기",
          "3. 고객센터에 찾아오는 길 보기",
        ],
        mode: "info",
      },
    };
    setMessages([...messages, msg]);
  };
  const showHelpDetail = (num) => {
    if (num === 0) {
      const msg = {
        user: { class: "user", message: ["전화로 문의할게요!"], mode: "basic" },
        bot: {
          class: "bot",
          message: ["고객센터의 전화번호는 02-0000-0000 번 입니다."],
          mode: "basic",
        },
        system: {},
      };
      setMessages([...messages, msg]);
    } else if (num === 1) {
      const msg = {
        user: {
          class: "user",
          message: ["메세지로 문의할게요!"],
          mode: "basic",
        },
        bot: {
          class: "bot",
          message: ["다음 창에 문의 내용을 입력해주세요."],
          mode: "basic",
        },
      };
      const input = {
        user: { class: "user", message: ["메세지"] },
        mode: "basic",
      };
      setMessages([...messages, msg, input]);
    } else {
      const msg = {
        user: {
          class: "user",
          message: ["고객센터 약도를 보여주세요!"],
          mode: "basic",
        },
        bot: {
          class: "bot",
          message: ["싫습니다"],
          mode: "basic",
        },
        system: {},
      };
      setMessages([...messages, msg]);
    }
  };
  const sendComplainMsg = () => {
    // 처리 x, 일단 초기화만..
    Swal.fire("내용이 접수되었습니다.\n감사합니다.");
    console.log("컴플레인 메세지 >>> ", complainMsg);
    setComplainMsg("");
    const msg = {
      user: {
        class: "user",
        message: ["내용이 접수되었습니다.\n감사합니다."],
        mode: "basic",
      },
      system: {},
    };
    messages.pop();
    setMessages([...messages, msg]);
  };
  const onChangeComplainMsg = (e) => {
    setComplainMsg(e.target.value);
  };
  return (
    <main className="ChatBot">
      {showChat ? (
        <div className="chatBox">
          <header className="headerBox">
            <div className="closeBox" onClick={closeChatBox}>
              x
            </div>
          </header>
          <main className="mainBox" ref={scrollRef}>
            <div className="bot">
              <div className="chat">
                <div className="infom">무엇을 도와드릴까요?</div>
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
            {messages.map((message) => {
              return (
                <ChatBotMessages
                  showChat={showChat}
                  message={message}
                  showHelp={showHelp}
                  showMap={showMap}
                  showGradeInfo={showGradeInfo}
                  showHelpDetail={showHelpDetail}
                  complainMsg={complainMsg}
                  sendComplainMsg={sendComplainMsg}
                  onChangeComplainMsg={onChangeComplainMsg}
                />
              );
            })}
          </main>
          <footer className="inputBox"></footer>
        </div>
      ) : (
        <div className="ToChatBox" onClick={showChatBox}>
          <img
            src={process.env.PUBLIC_URL + "/SlickImages/chat.png"}
            className="chatimg"
          />
        </div>
      )}
    </main>
  );
}
