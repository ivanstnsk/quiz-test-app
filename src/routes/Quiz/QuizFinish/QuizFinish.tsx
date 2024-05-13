import {
  Button,
  Paragraph,
  Section,
  Title,
} from "../../../components/UI.styled";
import { useStore } from "../../../store";

interface Props {}

export default function QuizFinish(props: Props) {
  const { finish, score, getPossibleScore } = useStore();

  return (
    <>
      <Section>
        <Title>FINISH</Title>
        <div>{`Your score: ${score} / ${getPossibleScore()}`}</div>
      </Section>
      <Section>
        <Paragraph>Click finish button to finish the Quiz</Paragraph>
        <Button onClick={finish}>Finish</Button>
      </Section>
    </>
  );
}
