import styled from "styled-components";
import { QuizAnswerStatus } from "../store/store";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-color);
`;

export const Container = styled.div`
  width: 100%;
  max-width: 600px;
  height: auto;
  min-height: 500px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-radius: 1rem;
  gap: 2rem;
`;

export const Section = styled(Container)`
  min-height: auto;
  border-radius: 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: var(--title-color);
`;

export const SubTitle = styled.h2`
  font-size: 1.5rem;
  color: var(--title-color);
`;

export const Paragraph = styled.p`
  color: var(--text-color);
`;

export const Button = styled.button`
  width: auto;
  display: flex;
  flex: 1;
  outline: none;
  font-size: 1rem;
  padding: 1rem;
  background-color: var(--btn-color);
  color: var(--bg-color);
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
`;

export const Options = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1rem;
`;

interface OptionProps {
  status: QuizAnswerStatus;
}

export const Option = styled.li<OptionProps>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  font-size: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 1px solid transparent;
  background-color: ${({ status }) => {
    switch (status) {
      case "correct":
        return "#2B7109";
      case "error":
        return "#7D0606";
      default:
        return "transparent";
    }
  }};

  &:hover {
    border-color: #ffffff3d;
  }
`;
