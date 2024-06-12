import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { increment } from "../redux/slices/counter";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: auto;
  margin: 1rem;
`;

export function Counter() {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <span>Counter: {value}</span>
    </Wrapper>
  );
}

