import {
  Button,
  Paragraph,
  Section,
  Title,
} from "../../../components/UI.styled";
import { useStore } from "../../../store";

interface Props {}

export default function QuizStart(props: Props) {
  const { start } = useStore();

  return (
    <>
      <Section>
        <Title>START</Title>
      </Section>
      <Section>
        <Paragraph>Click start button to start a Quiz</Paragraph>
        <Button onClick={start}>Start</Button>
      </Section>
    </>
  );
}
