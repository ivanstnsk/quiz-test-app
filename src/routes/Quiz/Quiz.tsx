import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, Wrapper } from "../../components/UI.styled";
import { useStore } from "../../store";

interface Props {}

export default function Quiz(props: Props) {
  const { phase, current } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (phase === "quiz") {
      navigate(`/quiz/${current + 1}`);
    }
    if (phase === "finish") {
      navigate(`/quiz/finish`);
    }
    if (phase === "start") {
      navigate(`/quiz/`);
    }
  }, [phase, current]);

  return (
    <Wrapper>
      <Container>
        <Outlet />
      </Container>
    </Wrapper>
  );
}
