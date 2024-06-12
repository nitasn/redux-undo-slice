export const withUndo = (namedReducer, { ignore = {} } = {}) => {
  const [[sliceName, reducer]] = Object.entries(namedReducer);

  const sliceHistory = [];

  const wrapper = (slice, action) => {
    const [_sliceName, _reducerName] = action.type.split("/");

    const _slice = reducer(slice, action);

    if (_sliceName !== sliceName) return _slice; // if not our slice, pass through

    if (_reducerName === "$UNDO") return sliceHistory.pop();

    // check if slice was mutated, as some reducers don't mutate (e.g. getters)
    if (slice !== _slice && !(_reducerName in ignore)) {
      sliceHistory.push(slice);
    }

    return { ..._slice, $HAS_HISTORY: sliceHistory.length > 0 };
  };

  return { [sliceName]: wrapper };
};

export function undoSlice(sliceName) {
  return { type: `${sliceName}/$UNDO` };
}
