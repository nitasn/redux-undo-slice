export const withUndo = (namedReducer) => {
  const [[sliceName, reducer]] = Object.entries(namedReducer);

  const sliceHistory = [];

  return (slice, action) => {
    const [_sliceName, _reducerName] = action.type.split("/");

    if (_sliceName !== sliceName) return reducer(slice, action);

    if (_reducerName === "$UNDO") return sliceHistory.pop();

    sliceHistory.push(slice);

    return {
      ...reducer(slice, action),
      $HAS_HISTORY: sliceHistory.length > 0,
    };
  };
};

export function undoSlice(sliceName) {
  return { type: `${sliceName}/$UNDO` };
}
