import { useSelector, useDispatch } from "react-redux";
import { beOneYearOlder, noop } from "../redux/slices/age";
import { undoSlice } from "../redux/undo";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: auto;
  margin: 1rem;
`;

export function Age() {
  const { value, $HAS_HISTORY } = useSelector((state) => state.age);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <button onClick={() => dispatch(beOneYearOlder())}>Grow Older</button>
      <span>Age: {value}</span>
      <button onClick={() => dispatch(undoSlice("age"))} disabled={!$HAS_HISTORY}>Undo</button>
      {/* <button onClick={() => dispatch(noop())}>NoOp</button> */}
    </Wrapper>
  );
}
