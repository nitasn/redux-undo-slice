import { Age } from "./components/Age";
import styled from "styled-components";
import { Counter } from "./components/Counter";

const Wrapper = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 320px;
  min-height: 100vh;
`;

export default function App() {
  return (
    <Wrapper>
      <Age />
      <Counter />
    </Wrapper>
  );
}
