import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/mydoginfo.scss";

const Mydoginfo = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  //강아지 성향에 대해서 정보를 입력받을 부분
  const [answers, setAnswers] = useState({
    size: "",
    shedding: "",
    barking: "",
    loneliness: "",
    tension: "",
    where: "",
  });
  const [recommendation, setRecommendation] = useState(null);
  //강아지 추천 질문에 대한 변수
  const questions = [
    { id: "size", text: "어떤 크기의 강아지를 찾고 있나요?" },
    { id: "shedding", text: "개가 털을 날려도 상관 없나요?" },
    { id: "barking", text: "개가 짖어도 상관없나요?" },
    { id: "loneliness", text: "집을 자주 비우시나요?" },
    { id: "tension", text: "산책을 하게된다면...?" },
    { id: "where", text: "현재 어디서 살고 있나요?" },
  ];
  //강아지 추천 질문 답에 대한 변수
  const options = {
    size: ["소형견", "중형견", "대형견"],
    shedding: ["Yes", "No"],
    barking: ["Yes", "No"],
    loneliness: ["Yes", "No"],
    tension: [
      "집 주변을 걷는 간단한 산책이 좋아",
      "운동도 할 겸 한번 뛰어볼까?",
    ],
    where: ["아파트", "마당이 없는 주택", "마당이 있는 주택"],
  };
  //질문 페이지? 한질문 끝나면 다음질문으로 넘어가는 코드
  const handleAnswer = (questionId, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
    // 다음 선택지로 넘어가는 코드
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handleRecommendation = () => {
    // Calculate recommendation based on answers
    const recommendedDog = calculateRecommendation(answers);
    setRecommendation(recommendedDog);
  };
  //강아지 정보는 담은 코드
  const calculateRecommendation = (answers) => {
    const dogBreeds = [
      {
        size: "소형견",
        shedding: "No",
        barking: "No",
        loneliness: "No",
        tension: "운동도 할 겸 한번 뛰어볼까?",
        where: "아파트",
        breed: "푸들",
      },
      {
        size: "소형견",
        shedding: "No",
        barking: "Yes",
        loneliness: "No",
        tension: "집 주변을 돌면서 간단한 산책이 좋아",
        where: "아파트",
        breed: "화이트테리어",
      },
      {
        size: "소형견",
        shedding: "No",
        barking: "Yes",
        loneliness: "Yes",
        tension: "집 주변을 돌면서 간단한 산책이 좋아",
        where: "아파트",
        breed: "치와와",
      },
      {
        size: "소형견",
        shedding: "No",
        barking: "Yes",
        loneliness: "No",
        tension: "집 주변을 돌면서 간단한 산책이 좋아",
        where: "아파트",
        breed: "시츄",
      },
      {
        size: "중형견",
        shedding: "Yes",
        barking: "Yes",
        loneliness: "Yes",
        tension: "운동도 할 겸 한번 뛰어볼까?",
        where: "아파트",
        breed: "보더콜리",
      },

      {
        size: "중형견",
        shedding: "Yes",
        barking: "Yes",
        loneliness: "No",
        tension: "집 주변을 돌면서 간단한 산책이 좋아",
        where: "아파트",
        breed: "달마시안",
      },
      {
        size: "대형견",
        shedding: "Yes",
        barking: "No",
        loneliness: "Yes",
        tension: "집 주변을 돌면서 간단한 산책이 좋아",
        where: "마당이 없는 주택",
        breed: "사모예드",
      },
      {
        size: "대형견",
        shedding: "No",
        barking: "Yes",
        loneliness: "Yes",
        tension: "집 주변을 돌면서 간단한 산책이 좋아",
        where: "마당이 없는 주택",
        breed: "골든리트리버",
      },
      {
        size: "대형견",
        shedding: "No",
        barking: "Yes",
        loneliness: "No",
        tension: "운동도 할 겸 한번 뛰어볼까?",
        where: "마당이 있는 주택",
        breed: "도베르만",
      },
    ];

    // 강아지가 가지고 있는 정보와 내가 선택한 정보와 일치하는 갯수 확인 하는 코드
    const matchingCounts = dogBreeds.map((dog) => {
      let count = 0;
      for (const key in answers) {
        if (answers[key] === dog[key]) {
          count++;
        }
      }
      return count;
    });

    // 일치하는 데이터의 갯수가 최대인 강아지정보를 찾는 코드
    const maxCountIndex = matchingCounts.indexOf(Math.max(...matchingCounts));

    return dogBreeds[maxCountIndex].breed;
  };

  return (
    //강아지 추천 결과 부분
    <div className="result">
      {recommendation ? (
        <div className="mydogresultbox">
          <p>
            <h1>당신에게 어울리는 강아지는?</h1>
            <br></br>
            {/* 추천 강아지 이미지 표시되는 부분 */}
            <img
              src={
                process.env.PUBLIC_URL + `/SlickImages/${recommendation}.jpeg`
              }
              className="resultimg"
            />
            <h1>"{recommendation}" 입니다</h1>
            {/* 정보 등록 및 강아지 추천 메인 페이지로 돌아가는 버튼 부분 */}
            <div>
              <button className="result_btn">나의 정보에 등록할래요!</button>
              <button className="result_btn" onClick={() => navigate("/mydog")}>
                아니요!그냥 돌아갈래요!
              </button>
            </div>
          </p>
        </div>
      ) : (
        //강아지 추천을 받기 위해 질문하는 부분
        <div className="dog">
          {currentQuestion < questions.length ? (
            <div key={questions[currentQuestion].id} className="mdi_db">
              <h2>{questions[currentQuestion].text}</h2>
              <div>
                {options[questions[currentQuestion].id].map((option) => (
                  //강아지 추천을 받기 위해 정보를 선택하는 버튼 부분
                  <button
                    className="mdi_btn"
                    key={option}
                    onClick={() =>
                      handleAnswer(questions[currentQuestion].id, option)
                    }
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ) : // 모든 질문이 끝나고 결과 확인하러 가는 부분
          null}
          {currentQuestion === questions.length && (
            <button onClick={handleRecommendation} className="mdi_finishbtn">
              <h1>모든 질문이 끝났습니다!</h1>
              결과 확인하기
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Mydoginfo;
