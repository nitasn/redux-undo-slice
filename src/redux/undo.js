export const withUndo = (namedReducer) => {
  const [[sliceName, reducer]] = Object.entries(namedReducer);

  const sliceHistory = [];

  const wrapper = (slice, action) => {
    const [_sliceName, _reducerName] = action.type.split("/");

    const _slice = reducer(slice, action);

    if (_sliceName !== sliceName) return _slice;

    if (_reducerName === "$UNDO") return sliceHistory.pop();

    if (slice !== _slice) sliceHistory.push(slice); // some reducers don't mutate (e.g. getters)

    return { ..._slice, $HAS_HISTORY: sliceHistory.length > 0 };
  };

  return { [sliceName]: wrapper };
};

export function undoSlice(sliceName) {
  return { type: `${sliceName}/$UNDO` };
}
