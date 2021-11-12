const actionType = {
  incrementCounter: "INCREMENT_COUNTER",
  decrementCounter: "DECREMENT_COUNTER",
  refreshCounter: "REFRESH_COUNTER",
};

export const counterAction = {
  incrementCounter: () => ({
    type: actionType.incrementCounter,
  }),

  decrementCounter: () => ({
    type: actionType.decrementCounter,
  }),

  refreshCounter: () => ({
    type: actionType.refreshCounter,
  }),
};

const initialState = {
  value: 0,
  test: "GG",
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.incrementCounter:
      return { ...state, value: state.value + 1 };

    case actionType.decrementCounter:
      return { ...state, value: state.value - 1 };

    case actionType.refreshCounter:
      return initialState;

    default:
      return state;
  }
};

export default counterReducer;
