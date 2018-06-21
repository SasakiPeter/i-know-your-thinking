const initialState = {
  history: [],
  stepNumber: 0
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POST_GUESS":
      return {
        history: action.history,
        stepNumber: action.stepNumber
      }
    default:
      return state
  }
};

export default postReducer;