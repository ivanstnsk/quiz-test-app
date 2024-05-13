import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  Button,
  Section,
  Title,
  SubTitle,
  Row,
  Options,
  Option,
} from "../../../components/UI.styled";
import { useStore } from "../../../store";
import { QuizAnswerStatus } from "../../../store/store";

interface Props {}

export default function QuizQuestion(props: Props) {
  const {
    questions,
    score,
    hasPrev,
    hasNext,
    prev,
    next,
    setAnswer,
    getAnswer,
    getAnswerStatus,
    getPossibleScore,
  } = useStore();
  const navigate = useNavigate();
  const { quizId } = useParams();
  const id = Number(quizId) - 1;

  const question = questions[id];

  useEffect(() => {
    if (!questions) {
      navigate("/quiz");
    }
  }, [question]);

  if (!question) {
    return null;
  }

  return (
    <>
      <Section>
        <Title>{question.title}</Title>
        <SubTitle>
          Score {score} / {getPossibleScore()}
        </SubTitle>
        <Options>
          {question.variants.map((variant: string, index: number) => {
            const status: QuizAnswerStatus =
              getAnswer() === variant ? getAnswerStatus() : "default";
            return (
              <Option
                status={status}
                key={variant}
                onClick={() => setAnswer(variant)}
              >{`${index + 1}) ${variant}`}</Option>
            );
          })}
        </Options>
      </Section>
      <Section>
        <Row>
          {hasPrev() && <Button onClick={prev}>Prev</Button>}
          <Button onClick={next}>{hasNext() ? "Next" : "Done"}</Button>
        </Row>
      </Section>
    </>
  );
}
