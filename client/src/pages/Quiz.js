import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/quiz.scss";
import { API_BASE_URL } from "../containers/app-config";
import axios from "axios";

//퀴즈 문제 항목 부분
const questions = [
  {
    question: "강아지의 다리의 갯수는?",
    options: ["10개", "4개", "6개", "8개"],
    answer: "4개",
  },
  {
    question: "강아지가 좋아하는 것은?",
    options: ["개껌", "치킨", "피자", "라면"],
    answer: "개껌",
  },
  {
    question: "강아지의 올바른 훈육방법 중 적합하지 않는 방법은?",
    options: [
      "긍정강화훈육",
      "일관성있는훈육",
      "엄격한훈육",
      "항상칭찬하는훈육",
    ],
    answer: "항상칭찬하는훈육",
  },
  {
    question: "강아지의 훈련순서 중 가장 먼제 해야 하는 훈련은?",
    options: ["배변훈련", "분리훈련", "복종훈련", "입질 훈련"],
    answer: "배변훈련",
  },
  {
    question: "다음 중 반려견의 가장 이상적인 적정 산책량은?",
    options: [
      "안해도 상관없다",
      "일주일에 2~3회",
      "매일 최대 1회씩",
      "매일 5회 이상",
    ],
    answer: "매일 최대 1회씩",
  },
  {
    question: "강아지가 사람을 물었을 때 올바르지 않은 나의 대처법은?",
    options: [
      "빠르게 저지하기",
      "상대방을 보호하기",
      "도망가기",
      "병원에 연락하기",
    ],
    answer: "도망가기",
  },
  {
    question: "반려견의 목줄 유무를 법으로 강제하고 있지는 않다.",
    options: ["o", "x"],
    answer: "o",
  },
  {
    question: "반려견은 혀와 발바닥의 땀샘을 통해 체온을 조절한다.",
    options: ["o", "x"],
    answer: "o",
  },
];

const Quiz = ({ userId }) => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [passed, setPassed] = useState(false);
  //퀴즈에 대한 스코어가 쌓이는 코드
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    //퀴즈를 풀었을 때 다음 퀴즈로 넘어가는 코드
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true); //점수가 나오는 코드
      setPassed(score >= 5); //점수에 대한 커트 라인 부분 현재 5개이하로 설정
      if (score >= 5) {
        const gradeUp = async () => {
          const res = await axios.patch(API_BASE_URL + "/member/gradeUp", {
            nickname: userId.nickname,
            toGrade: "서먹한 친구",
            nowGrade: "남남",
          });
          if (res.data === "grade up") {
            alert(`축하합니다.\n등급이 "서먹한 친구" 로 올라갔습니다!`);
          } else {
            if (res.data === "not login") {
              alert("축하합니다!\n다만, 로그인을 해야 등급이 올라갑니다.");
            } else {
              alert("축하합니다!\n다만, 이미 푸신 문제입니다.");
            }
          }
        };
        gradeUp();
      }
    }
  };

  return (
    <div className="Quiz">
      <div className="quiz-container">
        {showScore ? (
          <div className="score-section">
            {/* 퀴즈 맞춘 갯수 표시 부분 */}
            <h1>
              {questions.length} 문제 중 {score}문제를 맞추셨습니다!
            </h1>
            {/* 퀴즈 합 불 표시부분 */}
            <h1>
              {passed
                ? "축하합니다! 합격이에요"
                : "아쉽지만 불합격이에요. 다시 한번 풀어보세요"}
            </h1>

            <button
              onClick={() => navigate("/quizhome")}
              className="result_btn"
            >
              돌아가기
            </button>
          </div>
        ) : (
          <>
            {/* 퀴즈 화면 부분 */}
            <div className="question-section">
              <div className="question-count">
                {/* 퀴즈 제목?과 퀴즈넘버 부분 */}
                <span>강아지 훈련 기초편 QUIZ! {currentQuestion + 1}</span>/
                {questions.length}
              </div>
              <br />
              <div className="question-text">
                {questions[currentQuestion].question}
              </div>
            </div>
            {/* 퀴즈 정답 버튼 항목 부분 */}
            <div className="answer-section">
              {questions[currentQuestion].options.map((option) => (
                <ul key={option}>
                  <button
                    className="answer-button"
                    onClick={() =>
                      handleAnswerOptionClick(
                        option === questions[currentQuestion].answer
                      )
                    }
                  >
                    {option}
                  </button>
                </ul>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
