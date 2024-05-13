import {
  Button,
  Paragraph,
  Section,
  Title,
  SubTitle,
} from "../../../components/UI.styled";
import { useStore } from "../../../store";

interface Props {}

export default function QuizFinish(props: Props) {
  const { finish, score, getPossibleScore } = useStore();

  return (
    <>
      <Section>
        <Title>FINISH</Title>
        <SubTitle>{`Your grade: ${Math.floor(
          (score / getPossibleScore()) * 100
        )}%`}</SubTitle>
        <SubTitle>{`Actual score: ${score} points of ${getPossibleScore()}`}</SubTitle>
      </Section>
      <Section>
        <Paragraph>Click finish button to finish the Quiz</Paragraph>
        <Button onClick={finish}>Finish</Button>
      </Section>
    </>
  );
}
