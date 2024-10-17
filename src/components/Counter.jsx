import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { increment } from "../redux/slices/counter";
import { undoSlice } from "../redux/undo";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: auto;
  margin: 1rem;
`;

export function Counter() {
  const { value, $HAS_HISTORY } = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  return (
    <Wrapper>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <span>Counter: {value}</span>
      <button onClick={() => dispatch(undoSlice("counter"))} disabled={!$HAS_HISTORY}>Undo</button>
    </Wrapper>
  );
}

