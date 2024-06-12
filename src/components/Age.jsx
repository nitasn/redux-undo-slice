import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { beOneYearOlder, growTinyFraction } from "../redux/slices/age";
import { undoSlice } from "../redux/undo";

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
      <button onClick={() => dispatch(beOneYearOlder())}>Grow 1 Year Older</button>
      <button onClick={() => dispatch(growTinyFraction())}>Grow By Insgnificant Fraction</button>
      <span>Age: {value}</span>
      <button onClick={() => dispatch(undoSlice("age"))} disabled={!$HAS_HISTORY}>Undo</button>
    </Wrapper>
  );
}

