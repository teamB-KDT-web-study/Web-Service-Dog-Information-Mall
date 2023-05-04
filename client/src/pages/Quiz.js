import React, { useState } from "react";
import "../styles/quiz.scss";

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
    question: "강아지를 영어로 하면?",
    options: ["Cat", "Baby", "Dog", "Pig"],
    answer: "Dog",
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          <h1>
            축하합니다!! {questions.length} 문제 중 {score}문제를 맞추셨습니다!
          </h1>
          <button>돌아가기</button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>강아지 훈련 기초편 QUIZ! {currentQuestion + 1}</span>/
              {questions.length}
            </div>
            <br />
            <div className="question-text">
              {questions[currentQuestion].question}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].options.map((option) => (
              <ul>
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
  );
};

export default Quiz;
