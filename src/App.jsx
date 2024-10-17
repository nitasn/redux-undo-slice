import { Age } from "./components/Age";
import styled from "styled-components";
import { Counter } from "./components/Counter";

const Wrapper = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  max-width: fit-content;
  margin-inline: auto;
  gap: 3rem;
`;

const Exampler = styled.div`
  border: 1px solid #797979;
  border-radius: 5px;
`;

export default function App() {
  return (
    <Wrapper>
      <Exampler>
        <Counter />
      </Exampler>
      <Exampler>
        <Age />
      </Exampler>
    </Wrapper>
  );
}
