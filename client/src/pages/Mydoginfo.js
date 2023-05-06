import React, { useState } from "react";
import "../styles/mydoginfo.scss";

const Mydoginfo = () => {
  const [answers, setAnswers] = useState({
    size: "",
    shedding: "",
    barking: "",
    loneliness: "",
    tension: "",
    where: "",
  });
  const [recommendation, setRecommendation] = useState(null);

  const questions = [
    { id: "size", text: "어떤 크기의 강아지를 찾고 있나요?" },
    { id: "shedding", text: "개가 털을 날려도 상관 없나요?" },
    { id: "barking", text: "개가 짖어도 상관없나요?" },
    { id: "loneliness", text: "집을 자주 비우시나요?" },
    { id: "tension", text: "산책을 한다면...?" },
    { id: "where", text: "현재 어디서 살고 있나요?" },
  ];

  const options = {
    size: ["소형견", "중형견", "대형견"],
    shedding: ["Yes", "No"],
    barking: ["Yes", "No"],
    loneliness: ["Yes", "No"],
    tension: [
      "집 주변을 돌면서 간단한 산책이 좋아",
      "운동도 할 겸 한번 뛰어볼까?",
    ],
    where: ["아파트", "마당이 없는 주택", "마당이 있는 주택"],
  };

  const handleAnswer = (questionId, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const handleRecommendation = () => {
    // Calculate recommendation based on answers
    const recommendedDog = calculateRecommendation(answers);
    setRecommendation(recommendedDog);
  };

  const calculateRecommendation = (answers) => {
    const dogBreeds = [
      {
        size: "소형견",
        shedding: "No",
        barking: "No",
        loneliness: "No",
        tension: "운동도 할 겸 한번 뛰어볼까?",
        where: "아파트",
        breed: "토이푸들",
      },
      {
        size: "소형견",
        shedding: "No",
        barking: "Yes",
        loneliness: "No",
        tension: "집 주변을 돌면서 간단한 산책이 좋아",
        where: "아파트",
        breed: "요크셔테리",
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
        loneliness: "Yes",
        tension: "집 주변을 돌면서 간단한 산책이 좋아",
        where: "마당이 없는 주택",
        breed: "스피츠",
      },
      {
        size: "중형견",
        shedding: "Yes",
        barking: "Yes",
        loneliness: "No",
        tension: "집 주변을 돌면서 간단한 산책이 좋아",
        where: "아파트",
        breed: "웰시코기",
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
        breed: "골든 리트리버",
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

    // Count the number of matching criteria for each dog breed
    const matchingCounts = dogBreeds.map((dog) => {
      let count = 0;
      for (const key in answers) {
        if (answers[key] === dog[key]) {
          count++;
        }
      }
      return count;
    });

    // Find the index of the dog breed with the highest matching count
    const maxCountIndex = matchingCounts.indexOf(Math.max(...matchingCounts));

    return dogBreeds[maxCountIndex].breed;
  };

  return (
    <div>
      <h1>강아지 추천</h1>
      {recommendation ? (
        <p>당신에게 어울리는 강아지는: {recommendation} 입니다</p>
      ) : (
        <div className="dog">
          {questions.map((question) => (
            <div key={question.id} className="mdi_db">
              <h2>{question.text}</h2>
              <div>
                {options[question.id].map((option) => (
                  <button
                    className="mdi_btn"
                    key={option}
                    onClick={() => handleAnswer(question.id, option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <button onClick={handleRecommendation} className="mdi_btn">
            결과 확인하기
          </button>
        </div>
      )}
    </div>
  );
};

export default Mydoginfo;
