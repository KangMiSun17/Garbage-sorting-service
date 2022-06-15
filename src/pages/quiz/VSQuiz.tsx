import QuestionCard from "./QuestionCard";
import {
  TextTwoOption,
  TwoOptions,
  QuizContainer,
} from "../../styles/quizStyles/QuizzesStyle";
import { useState } from "react";
import Answer from "./Answer";

// vs quiz page
function VSQuiz() {
  const option = ["일반", "음식물"];
  const [isSelected, setIsSelected] = useState([false]);

  const clickHandler = (idx: number) => {
    const newArr: boolean[] = Array(option.length).fill(false);
    newArr[idx] = true;
    setIsSelected(newArr);
  };

  return (
    <QuizContainer>
      <QuestionCard />
      <TwoOptions>
        {option.map((text, index) => {
          return (
            <TextTwoOption
              onClick={() => clickHandler(index)}
              isSelected={isSelected[index]}
              key={index}
            >
              {text}
            </TextTwoOption>
          );
        })}
      </TwoOptions>
      <Answer />
    </QuizContainer>
  );
}

export default VSQuiz;