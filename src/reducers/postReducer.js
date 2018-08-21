const initialState = {
  history: [{ counts: [null, null, null], id: -1, eat: -1, bite: -1 }],
  stepNumber: 0,
  completed: false
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POST_GUESS":
      return {
        ...state,
        ...action
      }
    case "COMPLETED":
      return {
        ...state,
        completed: true
      }
    default:
      return state
  }
};

export default postReducer;