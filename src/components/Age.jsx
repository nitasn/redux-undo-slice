import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { growOneYearOlder, growTinyFraction } from "../redux/slices/age";
import { undoSlice } from "../redux/undo";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: auto;
  margin: 1rem;

  span {
    margin-inline: auto;
  }
`;

export function Age() {
  const { value, $HAS_HISTORY } = useSelector((state) => state.age);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <button onClick={() => dispatch(growOneYearOlder())}>Grow by Year</button>
      <button onClick={() => dispatch(growTinyFraction())}>Grow By Insgnificant Fraction</button>
      <span>Age: {value}</span>
      <button onClick={() => dispatch(undoSlice("age"))} disabled={!$HAS_HISTORY}>Undo</button>
    </Wrapper>
  );
}

